import React from 'react';

import '../style/globals.scss' 
import PostCard from './PostCard'; // Importing the PostCard component
import PostWidget from './PostWidget';
import Categories from './Categories';
import Navbar from '../Navbar/Navbar';


import { useEffect } from 'react';
import { useState } from 'react';

import { fetchPosts } from '../Service/fetchPosts'; // Importing the fetchPosts function




const Blog = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const getPosts = async () => {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      };
  
      getPosts();
    }, []);
  
    return (
      <div className="blog-page">
        {posts && posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.node.slug} post={post} />)
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    );
  };

export default Blog;

  
 


