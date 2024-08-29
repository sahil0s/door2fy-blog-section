import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRecentPosts, getSimilarPosts } from '../Service/fetchPosts';
import './Blog.css';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = slug
          ? await getSimilarPosts(categories.map((cat) => cat.slug), slug)
          : await getRecentPosts();
        setRelatedPosts(result);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [slug, categories]);

  const handlePostClick = (postSlug) => {
    navigate(`/post/${postSlug}`);
  };

  return (
    <div className="PostWidget">
      <h3>{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.length > 0 ? (
        relatedPosts.map((post) => (
          <div
            key={post.slug}
            className="post-item"
            onClick={() => handlePostClick(post.slug)}
          >
            <h3>{post.title}</h3>
          </div>
        ))
      ) : (
        <p>No related posts available.</p>
      )}
    </div>
  );
};

export default PostWidget;
