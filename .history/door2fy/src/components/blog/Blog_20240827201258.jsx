import React, { useEffect, useState } from 'react';
import './Blog.css'; // Import the Blog.css file
import PostCard from './PostCard'; // Importing the PostCard component
import PostWidget from './PostWidget'; // Importing the PostWidget component
import CategoryWidget from './CategoryWidget'; // Importing the CategoryWidget component
import Navbar from '../Navbar/Navbar'; // Importing the Navbar component
import Footer from '../Footer/Footer';
import Banner from './BlogBanner';
import { fetchPosts, fetchCategories } from '../Service/fetchPosts'; // Importing the fetchPosts function

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    const getCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    getPosts();
    getCategories();
  }, []);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
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
                posts
                  .filter((post) =>
                    selectedCategory
                      ? post.node.category.slug === selectedCategory.slug
                      : true
                  )
                  .map((post) => <PostCard key={post.node.slug} post={post} />)
              ) : (
                <p>No posts available.</p>
              )}
            </div>
          </div>
          <div className="sidebar">
            <CategoryWidget categories={categories} onSelectCategory={handleSelectCategory} />
            <PostWidget categories={categories} slug={selectedCategory ? selectedCategory.slug : null} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
