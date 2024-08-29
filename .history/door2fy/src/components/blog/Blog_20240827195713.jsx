import React, { useEffect, useState } from 'react';
import './Blog.css'; // Import the Blog.css file
import PostCard from './PostCard'; // Importing the PostCard component
import PostWidget from './PostWidget'; // Importing the PostWidget component
import CategoryWidget from './CategoryWidget'; // Importing the CategoryWidget component
import Navbar from '../Navbar/Navbar'; // Importing the Navbar component
import Footer from '../Footer/Footer';
import Banner from './BlogBanner';
import { fetchPosts } from '../Service/fetchPosts'; // Importing the fetchPosts function

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
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
            <CategoryWidget />
            <PostWidget />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
