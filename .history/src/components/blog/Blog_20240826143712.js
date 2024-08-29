export { default as PostCard } from './PostCard';
export { default as PostWidget } from './PostWidget';
export { default as Categories } from './Categories';

import React from 'react';

const Blog = () =>{
    return (
        <>
            {postcard.tile}
            {post.excerpt}
        </>
    )
}

export default Blog;