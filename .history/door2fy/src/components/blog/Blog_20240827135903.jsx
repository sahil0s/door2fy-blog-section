import React from 'react';

import '../style/globals.scss'
import PostCard from './PostCard';
import PostWidget from './PostWidget';
import Categories from './Categories';
import Navbar from '../Navbar/Navbar';


import { useEffect } from 'react';
import { useState } from 'react';


import { getPosts } from '../Service';


const Blog = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const fetchPosts = async () => {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      };
  
      fetchPosts();
    }, []);
  
    return (
      <div className="blog-page">
        {posts && posts.length > 0 ? (
          posts.map((post) => <div key={post.node.slug}>{post.node.title}</div>)
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    );
  };

export default Blog;

  
 


