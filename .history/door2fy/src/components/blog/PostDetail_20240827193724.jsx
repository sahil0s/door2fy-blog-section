import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostBySlug } from '../Service/fetchPosts'; // Function to fetch a single post
import './PostDetail.css'; // Optional: Import CSS file for styling

const PostDetail = () => {
  const { slug } = useParams(); // Get slug from URL params
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const getPost = async () => {
      try {
        const fetchedPost = await fetchPostBySlug(slug);
        setPost(fetchedPost);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false); // Set loading to false once fetch is done
      }
    };

    getPost();
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="post-detail">
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <img src={post.featuredImage.url} alt={post.title} />
          <div>{post.content}</div>
          {/* Render other post details as needed */}
        </div>
      ) : (
        <p>No post found.</p>
      )}
    </div>
  );
};

export default PostDetail;
