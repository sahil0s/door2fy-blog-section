import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostBySlug } from '../Service/fetchPosts'; // Function to fetch a single post
import './PostDetail.css'; // Optional: Import CSS file for styling

const PostDetail = () => {
  const { slug } = useParams(); // Get slug from URL params
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const fetchedPost = await fetchPostBySlug(slug);
        setPost(fetchedPost);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    getPost();
  }, [slug]);

  return (
    <div className="post-detail">
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <img src={post.featuredImage.url} alt={post.title} />
          <div>{post.content}</div>
          {/* Render other post details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostDetail;

// In conte fetchPosts.js
export const fetchPostBySlug = async (slug) => {
    const query = gql`
      query GetPostBySlug($slug: String!) {
        post(where: { slug: $slug }) {
          title
          featuredImage {
            url
          }
          content
          // Include other fields as needed
        }
      }
    `;
  
    try {
      const result = await request(graphqlAPI, query, { slug });
      return result.post;
    } catch (error) {
      console.error('Error fetching post by slug:', error);
      return null;
    }
  };