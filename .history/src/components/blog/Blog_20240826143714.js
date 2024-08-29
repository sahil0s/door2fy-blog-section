export { default as PostCard } from './PostCard';
export { default as PostWidget } from './PostWidget';
export { default as Categories } from './Categories';

import React from 'react';
import PostCard from './PostCard';

const Blog = () =>{
    return (
        <>
            {PostCard.tile}
            {post.excerpt}
        </>
    )
}

export default Blog;