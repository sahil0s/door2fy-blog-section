import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  // Safeguard checks
  const postNode = post?.node || {};
  const author = postNode.author || {};
  const featuredImage = postNode.featuredImage || {};

  return (
    <div className="post-card">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        {featuredImage.url && (
          <img 
            src={featuredImage.url} 
            alt={postNode.title || 'Post Image'} 
            className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg" 
          />
        )}
      </div>

      <h2>
        <Link to={`/post/${postNode.slug || ''}`}>{postNode.title || 'Untitled Post'}</Link>
      </h2>

      <div>
        <div>
          <p>
            {author.name || 'Unknown Author'}
          </p>
        </div>
      </div>
      
      <p>
        {postNode.excerpt || 'No excerpt available.'}
      </p>
      
      <div className="button">
        <Link to={`/post/${postNode.slug || ''}`}>
          <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
