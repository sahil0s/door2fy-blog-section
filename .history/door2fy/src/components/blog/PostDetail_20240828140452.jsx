import React, { useState, useEffect } from 'react';
import { fetchPostBySlug } from '../Service/fetchPosts'; // Adjust path as necessary

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
        setError('Failed to fetch post. Please try again later.'); // Set a user-friendly error message
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>; // Display the error message if an error occurred

  return (
    <>
      {post ? (
        <>
          {/* Render the post details */}
          <h1>{post.title}</h1>
          <img src={post.featuredImage.url} alt={post.title} />
          <p>{post.content}</p>
          <p>Published on: {new Date(post.createdAt).toDateString()}</p>
        </>
      ) : (
        <p>Post not found</p>
      )}
    </>
  );
};

export default PostDetailPage;
