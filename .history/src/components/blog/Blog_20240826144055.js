

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