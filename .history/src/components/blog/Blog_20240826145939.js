import React from 'react';
import PostCard from './PostCard';

const Blog = () =>{
    return (
        <>
        
            {PostCard.tile}
            {PostCard.excerpt}
        </>
    )
}

export default Blog;

export { default as PostCard } from './PostCard';
export { default as PostWidget } from './PostWidget';
export { default as Categories } from './Categories';