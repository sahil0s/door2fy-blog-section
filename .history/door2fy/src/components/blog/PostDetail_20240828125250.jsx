import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostBySlug } from '../Service/fetchPosts'; // Import fetchPostBySlug function
import Navbar from '../Navbar/Navbar';
import './Blog.css'; // Import CSS file for styling

const PostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const fetchedPost = await fetchPostBySlug(slug);
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          console.error("Post not found.");
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    getPost();
  }, [slug]);

  return (
    <>
    
    </>
   
  );
};

export default PostDetail;
