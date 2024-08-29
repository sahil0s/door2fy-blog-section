import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Blog.css'; // Import the Blog.css file


import { getRecentPosts,getSimilarPosts } from '../Service/fetchPosts';


const Postwidget = ({ categories, slug }) =>{
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if(slug) {
            getSimilarPosts(categories, slug)
                .then((result) => setRelatedPosts(result))
        }else{
            getRecentPosts()
                .then((result) => setRelatedPosts(result))
        }
    }, [slug])

    console.log(relatedPosts)

    return (
        <div className='PostWidget'>
            <h3>
                {slug ? 'Related posts' : "Recent Posts"}
            </h3>
            {/* // Assuming relatedPosts is properly defined and contains post objects */}
            // Inside your component
return (
  <div>
    {relatedPosts.length > 0 ? (
      relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              alt={post.title}
              height="60"
              width="60"
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{post.title}</h3>
          </div>
        </div>
      ))
    ) : (
      <p>No related posts available.</p>
    )}
  </div>
);

        </div>
    )
}

export default Postwidget; 