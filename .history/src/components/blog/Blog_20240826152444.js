import React from 'react';
import { PostCard, Categories, PostWidget } from '../blog';

const Blog = () =>{
    return (
        <div className='container mx-auto px-10 mb-8'>
            <div></div>
            <title>Door2fy Blogs</title>        
            
        </div>
    )
}

export default Blog;

export { default as PostCard } from './PostCard';
export { default as PostWidget } from './PostWidget';
export { default as Categories } from './Categories';