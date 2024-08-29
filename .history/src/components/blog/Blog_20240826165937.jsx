import React from 'react';
// import { PostCard, Categories, PostWidget } from '../blog';
import '../style/globals.scss'
import PostCard from './PostCard';
import PostWidget from './PostWidget';
import Categories from './Categories';
import Navbar from '../Navbar/Navbar';

import { getPosts } from '../Service';

const posts = []

export default function Blog ({ posts }) {
    return (
        <div className='container mx-auto px-10 mb-8'>
            <Navbar />
            <h1>Door2fy Blogs</h1>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap12'>
                <div className='lg:col-span-8 col-span-1'>
                {posts.map((post) => <PostCard post={post} key={post.title}/> )}
                </div>
            </div>
            <div className='lg:col-span-4 col-span-1'>
                <div className='lg:sticky relative top-8'>
                    <PostWidget />
                    <Categories />
                </div>
            </div>
            
        </div>
    )
}


export async function getStaticProps() {
    const posts = (await getPosts()) || [];

    return{
        props: { posts }
    }
}

export { default as PostCard } from './PostCard';
export { default as PostWidget } from './PostWidget';
export { default as Categories } from './Categories';