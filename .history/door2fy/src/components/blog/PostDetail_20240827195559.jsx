// PostDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostBySlug } from '../Service/fetchPosts'; // Function to fetch a single post
import './.css'; // Optional: Import CSS file for styling

const PostDetail = () => {
  const { slug } = useParams(); // Get slug from URL params
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const getPost = async () => {
      try {
        const fetchedPost = await fetchPostBySlug(slug);
        if (fetchedPost && fetchedPost.node) {
          setPost(fetchedPost.node); // Make sure to set the correct data
        } else {
          setError('Post not found');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setError('Error fetching post');
      } finally {
        setLoading(false); // Set loading to false once fetch is done
      }
    };

    getPost();
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="post-detail">
      {post ? (
        <div>
          <h1>{post.title}</h1>
          {post.featuredImage && (
            <img
              src={post.featuredImage.url}
              alt={post.title}
              className="post-detail-image"
            />
          )}
          <div className="post-content">
            {post.content}
            {/* Render other post details as needed */}
          </div>
        </div>
      ) : (
        <p>No post found.</p>
      )}
    </div>
  );
};

export default PostDetail;
