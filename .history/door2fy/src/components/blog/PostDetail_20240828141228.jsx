import React, { useState, useEffect } from 'react';
import { fetchPostBySlug } from '../Service/fetchPosts'; // Adjust path as necessary
import PostDetail from './PostDetail';
import PostWidget from './PostWidget'; // Import your PostWidget component
import Navbar from '../Navbar/Navbar';

const PostDetailPage = ({ slug }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Define the error state

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const result = await fetchPostBySlug(slug);
        setPost(result);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Failed to fetch post'); // Set the error message
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>; // Display the error message if an error occurred

  return (
    <></>
    <div className='post-detail-container'>
    <Navbar />
      {post ? (
        <div className='post-meta'>
          <PostDetail post={post} />
          <PostWidget slug={post.slug} categories={post.categories.map((cat) => cat.slug)} />
        </div>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
};

export default PostDetailPage;
