import React from 'react';
import './Blog.css'; // Import the Blog.css file

import '../style/globals.scss' //Importing the global css
import PostCard from './PostCard'; // Importing the PostCard component
import PostWidget from './PostWidget'; // importing the postWidget
import import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../Service/fetchCategories';
import './CategoryWidget.css';

const CategoryWidget = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
    };

    getCategories();
  }, []);

  return (
    <div className="CategoryWidget">
      <h3>Categories</h3>
      <div className="category-list">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div 
              key={category.slug} 
              className="category-item"
              onClick={() => onSelectCategory(category.slug)}
            >
              <span>{category.name}</span>
            </div>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryWidget;
 from './CategoryWidget'; // importing the categorier
import Navbar from '../Navbar/Navbar'; // importing the navbar


import { useEffect } from 'react';
import { useState } from 'react';

import { fetchPosts } from '../Service/fetchPosts'; // Importing the fetchPosts function
import Footer from '../Footer/Footer';
import Banner from './BlogBanner';




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
        <>
        <Navbar className="navbar" />
        <Banner />
             <div className="blog-page">
                <div className="blog-container">
               
                <div className="blog-content">
                    <div className="postCard">
                    {posts && posts.length > 0 ? (
                        posts.map((post) => <PostCard key={post.node.slug} post={post} />)
                    ) : (
                        <p>No posts available.</p>
                    )}
                    </div>
                </div>
                <div className="sidebar">
                <CategoryWidget onSelectCategory={handleCategorySelect} />
                    <PostWidget />
                </div>
                </div>
            </div>
            <Footer />
        </>
       
    );
  };

export default Blog;

  
 


