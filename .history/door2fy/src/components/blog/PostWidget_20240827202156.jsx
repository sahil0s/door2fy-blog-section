import React, { useState, useEffect } from 'react';
import { getRecentPosts, getSimilarPosts } from '../Service/fetchPosts';
import './PostWidget.css'; // Import CSS file for styling

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = slug
          ? await getSimilarPosts(categories.map(cat => cat.slug), slug)
          : await getRecentPosts();
        setRelatedPosts(result);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [slug, categories]);

  const handlePostClick = (postSlug) => {
    window.open(`/post/${postSlug}`, '_blank'); // Open in a new tab
  };

  return (
    <div className="post-widget">
      <h3>{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.length > 0 ? (
        relatedPosts.map((post) => (
          <div
            key={post.slug}
            className="post-item"
            onClick={() => handlePostClick(post.slug)} // Add onClick handler
          >
            <div className="w-16 flex-none">
              <img
                alt={post.title}
                height="60"
                width="60"
                className="align-middle rounded-full"
                src={post.featuredImage.url}
              />
            </div>
            <div className="post-text">
              <h3>{post.title}</h3>
            </div>
          </div>
        ))
      ) : (
        <p>No related posts available.</p>
      )}
    </div>
  );
};

export default PostWidget;
