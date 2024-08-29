import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  const handlePostClick = () => {
    navigate(`/post/${post.node.slug}`);
  };

  return (
    <div className="post-card" onClick={handlePostClick}>
      <img src={post.node.featuredImage.url} alt={post.node.title} />
      <h2>{post.node.title}</h2>
      <p>{post.node.excerpt}</p>
      <div className="post-meta">
        <p>By {post.node.admin.name}</p>
        <p>Category: {post.node.category.name}</p>
        <p>Published on: {new Date(post.node.createdAt).toDateString()}</p>
      </div>
    </div>
  );
};

export default PostCard;
