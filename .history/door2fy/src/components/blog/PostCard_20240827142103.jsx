import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';
import { MdPodcasts } from 'react-icons/md';

const PostCard = ({ post }) => {
    return (
      <div className="post-card bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
        <div className='rela'>

        </div>
        <h2>{post.node.title}</h2>
        <p>{post.node.excerpt}</p>
        <img src={post.node.featuredImage.url} alt={post.node.title} />
        <div className="post-meta">
          <p>By {post.node.admin.name}</p>
          <p>Category: {post.node.category.name}</p>
          <p>Published on: {new Date(post.node.createdAt).toDateString()}</p>
        </div>
      </div>
    );
  };

export default PostCard;



