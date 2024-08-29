// PostCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css'; // Import CSS file for styling

const PostCard = ({ post }) => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleClick = () => {
    navigate(`/post/${post.node.slug}`); // Navigate to post detail page
  };

  return (
    <div className="post-card" onClick={handleClick}>
      <img src={post.node.featuredImage.url} alt={post.node.title} className="post-image" />
      <h2 className="post-title">{post.node.title}</h2>
      <p className="post-excerpt">{post.node.excerpt}</p>
    </div>
  );
};

export default PostCard;
