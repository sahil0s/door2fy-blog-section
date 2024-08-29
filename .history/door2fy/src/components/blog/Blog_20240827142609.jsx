import React from 'react';

import '../style/globals.scss' //Importing the global css
import PostCard from './PostCard'; // Importing the PostCard component
import PostWidget from './PostWidget'; // importing the postWidget
import Categories from './Categories'; // importing the categorier
import Navbar from '../Navbar/Navbar'; // importing the navbar


import { useEffect } from 'react';
import { useState } from 'react';

import { fetchPosts } from '../Service/fetchPosts'; // Importing the fetchPosts function




const Blog = () => {
    const [posts, setPosts] = useState([]);
  //useeffect for fetching the posts
    useEffect(() => {
      const getPosts = async () => {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      };
  
      getPosts();
    }, []);
  
    return (
        
      <div className="blog-page">
        <Navbar />
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='lg:col-span'>

            </div>

        </div>
        {posts && posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.node.slug} post={post} />)
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    );
  };

export default Blog;

  
 


