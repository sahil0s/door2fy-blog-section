import React from 'react';

import '../style/globals.scss'
import PostCard from './PostCard';
import PostWidget from './PostWidget';
import Categories from './Categories';
import Navbar from '../Navbar/Navbar';

// import React, { useEffect, useState } from 'react';

import { useEffect } from 'react';
import { useState } from 'react';


import { getPosts } from '../Service';

// const posts = [
//     {title:'read', expect:'learn'},
//     {title:'read', expect:'learn'}
// ]

// old code 
// export default function Blog ({ posts }) {
//     return (
//         <div className='container mx-auto px-10 mb-8'>
//             <Navbar />
//             <h1>Door2fy Blogs</h1>
//             <div className='grid grid-cols-1 lg:grid-cols-12 gap12'>
//                 <div className='lg:col-span-8 col-span-1'>
//                     {/* <PostCard /> */}
//                 {posts && posts.map((post) => <PostCard post={post} key={post.title}/> )}
//                 </div>
//             </div>
//             <div className='lg:col-span-4 col-span-1'>
//                 <div className='lg:sticky relative top-8'>
//                     <PostWidget />
//                     <Categories />
//                 </div>
//             </div>
            
//         </div>
//     )
// }


// export async function getStaticProps() {
//     const posts = (await getPosts()) || [];

//     return{
//         props: { posts }
//     }
// }

// export { default as PostCard } from './PostCard';
// export { default as PostWidget } from './PostWidget';
// export { default as Categories } from './Categories';

const Blog = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const fetchedPosts = await getPosts();
          setPosts(fetchedPosts);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };
  
      fetchPosts();
    }, []);
  
    return (
      <div className='container mx-auto px-10 mb-8'>
        <Navbar />
        <h1>Door2fy</h1>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap'>
            <div>

            </div>
        </div>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.node.slug}>
              <h2>{post.node.title}</h2>
              <p>{post.node.excerpt}</p>
              <img src={post.node.featuredImage.url} alt={post.node.title} />
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    );
  };
  
  export default Blog;


