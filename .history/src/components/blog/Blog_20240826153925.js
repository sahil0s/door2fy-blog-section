import React from 'react';
// import { PostCard, Categories, PostWidget } from '../blog';

import PostCard from './PostCard';
import PostWidget from './PostWidget';
import Categories from './Categories';

const Blog = () =>{
    return (
        <div className='container mx-auto px-10 mb-8'>
            <div>
                 <h1>Door2fy Blogs</h1>
            </div>
            <div className='grid grid-cols-1 lg:'>
                <div>
                {posts.map((post) => <PostCard post={post} key={post.title}/> )}
                </div>
            </div>
            <div>
                <div>
                    <PostWidget />
                    <Categories />
                </div>
            </div>
            
        </div>
    )
}

export default Blog;

export { default as PostCard } from './PostCard';
export { default as PostWidget } from './PostWidget';
export { default as Categories } from './Categories';