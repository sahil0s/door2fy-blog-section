import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Use useParams for fetching URL params
import { fetchPostBySlug, fetchCategories } from '../Service/fetchPosts'; // Import your fetch functions
import Navbar from '../Navbar/Navbar';
import PostDetail from './PostDetail';
import PostWidget from './PostWidget';
import CategoryWidget from './CategoryWidget';
import Loader from '../Loader'; // Assuming you have a Loader component

const PostDetailsPage = () => {
  const { slug } = useParams(); // Get slug from URL params
  const [post, setPost] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const postData = await fetchPostBySlug(slug);
        const categoriesData = await fetchCategories();
        setPost(postData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching post or categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <Loader />; // Show a loader while fetching data
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            {post ? (
              <>
                <PostDetail post={post} />
                <PostWidget slug={post.slug} categories={post.categories.map((cat) => cat.slug)} />
                {/* Additional components like Comments, Author, AdjacentPosts, etc. can be added here */}
              </>
            ) : (
              <p>Post not found</p>
            )}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <CategoryWidget categories={categories} onSelectCategory={() => { /* Implement filter functionality */ }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
