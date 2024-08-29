export { default as PostCard } from './PostCard';
export { default as PostWidget } from './PostWidget';
export { default as Categories } from './Categories';

import React from 'react';
import { PostCard, PostWidget, Categories } from './components/blog';


const Blog = () =>{
    return (
        <>
            {post.tile}
            {post.excerpt}
        </>
    )
}

export default Blog;