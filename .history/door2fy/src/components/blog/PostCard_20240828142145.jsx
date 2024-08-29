import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Blog.css'; // Import CSS file for styling

const PostCard = ({ post }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handlePostClick = () => {
    navigate(`/post/${post.node.slug}`); // Navigate to the post detail page
  };

  return (
    <div className="post-card" onClick={handlePostClick}> {/* Add onClick handler */}
      <div className="post-meta">
        <img src={post.node.featuredImage.url} alt={post.node.title} />
        <h2>{post.node.title}</h2>
        <p>{post.node.excerpt}</p>
        <div className="post-meta">
          <p>By {post.node.admin.name}</p>
          <p>Category: {post.category.name}</p>
          <p>Published on: {new Date(post.node.createdAt).toDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
