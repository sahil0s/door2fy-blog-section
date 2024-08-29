import React, { useEffect, useState } from 'react';
import './Blog.css';
import PostCard from './PostCard';
import PostWidget from './PostWidget';
import CategoryWidget from './CategoryWidget'; // Import the CategoryWidget component
import { fetchPosts } from '../Service/fetchPosts';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
      const getPosts = async () => {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      };
  
      getPosts();
    }, []);
    
    // Function to handle category selection
    const handleCategorySelect = async (slug) => {
        const fetchedPosts = await fetchPostsByCategory(slug);
        setPosts(fetchedPosts);
    };
  
    return (
      <div className="blog-page">
        {/* Render the CategoryWidget and pass the handleCategorySelect function */}
        <CategoryWidget onSelectCategory={handleCategorySelect} />
        <div className='postCard'>
          <div className='postcard-inner'>
            {posts && posts.length > 0 ? (
              posts.map((post) => <PostCard key={post.node.slug} post={post.node} />)
            ) : (
              <p>No posts available.</p>
            )}
          </div>
        </div>
        <PostWidget />
      </div>
    );
  };
  
  export default Blog;
