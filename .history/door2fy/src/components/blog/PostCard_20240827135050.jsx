import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';
import { MdPodcasts } from 'react-icons/md';

const PostCard = ( { post } ) =>{
    console.log(post);
    return (
        <div className='bg-white shadoq-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
            <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
                <img 
                    src={post.featuredImage.url}
                    alt={post.title}   
                    className="object-top absolute h-87 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"             
                />

            </div>
        </div>
            
                    
              
           

    )
}

export default PostCard;


import React from 'react';
import PostCard from './PostCard';

const AnotherPage = ({ posts }) => {
  return (
    <div className="another-page">
      {posts && posts.length > 0 ? (
        posts.map((post) => <PostCard key={post.node.slug} post={post} />)
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default AnotherPage;
