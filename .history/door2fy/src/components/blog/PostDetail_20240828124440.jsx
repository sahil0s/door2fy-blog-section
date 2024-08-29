import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostBySlug } from '../Service/fetchPosts'; // Import fetchPostBySlug function
import Navbar from '../Navbar/Navbar';

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
    <div cla>
      <Navbar />
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <img src={post.featuredImage.url} alt={post.title} />
          <p>{post.content}</p>
          <p>Published on: {new Date(post.createdAt).toDateString()}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostDetail;
