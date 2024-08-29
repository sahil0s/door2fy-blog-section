import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

import { getSimilarPosts, getRecentPosts } from '../Service/fetchPosts';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate


  // Function to handle click and navigate to the post
  const handleClick = (postSlug) => {
    navigate(`/post/${postSlug}`);
  };

  return (
    <div className="PostWidget">
      <h3>{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
        <div 
          key={index} 
          className="post-item"
          onClick={() => handleClick(post.slug)} // Apply onClick to navigate
          style={{ cursor: 'pointer' }} // Change cursor to indicate clickability
        >
          <div>
            <div>
              <span className="text-md">{post.title}</span>
            </div>
            <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
