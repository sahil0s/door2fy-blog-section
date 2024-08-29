import React, { useEffect, useState } from 'react';
import './Blog.css'; // Import the Blog.css file

import '../style/globals.scss'; // Importing the global CSS
import PostCard from './PostCard'; // Importing the PostCard component
import PostWidget from './PostWidget'; // Importing the PostWidget
import CategoryWidget from './CategoryWidget'; // Importing the CategoryWidget
import Navbar from '../Navbar/Navbar'; // Importing the Navbar
import Footer from '../Footer/Footer'; // Importing the Footer
import Banner from './BlogBanner'; // Importing the Blog Banner

import { fetchPosts, fetchPostsByCategory } from '../Service/fetchPosts'; // Importing the fetchPosts functions

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const getPosts = async () => {
        const fetchedPosts = await fetchPosts();
        console.log(fetchedPosts); // Log to inspect
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
        <>
            <Navbar className="navbar" />
            <Banner />
            <div className="blog-page">
                <div className="blog-container">
                    <div className="blog-content">
                        <div className="postCard">
                            {posts && posts.length > 0 ? (
                                posts.map((post) => <PostCard key={post.node.slug} post={post.node} />)
                            ) : (
                                <p>No posts available.</p>
                            )}
                        </div>
                        <div className="sidebar">
                        <CategoryWidget onSelectCategory={handleCategorySelect} />
                        <PostWidget />
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blog;
