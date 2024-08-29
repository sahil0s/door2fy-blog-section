import React from 'react';
import './Blog.css'; // Import CSS file for styling

const PostCard = ({ post }) => {
  const handlePostClick = () => {
    window.open(`/post/${post.node.slug}`, '_blank'); // Open in a new tab
  };

  return (
    <div className="post-card" onClick={handlePostClick}>
      <div className="postcard-inner">
        <h2>{post.node.title}</h2>
        <p>{post.node.excerpt}</p>
        <img src={post.node.featuredImage.url} alt={post.node.title} />
        <div className="post-meta">
          <p>By {post.node.admin.name}</p>
          <p>Category: {post.node.category.name}</p>
          <p>Published on: {new Date(post.node.createdAt).toDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
