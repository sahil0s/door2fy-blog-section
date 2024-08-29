import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
import moment from 'moment';
import { Link } from 'react-router-dom';


import { getSimilarPosts, getRecentPosts } from '../Service/fetchPosts';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="PostWidget">
      <h3>{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="post-item">
          {/* <div>
           <img
                  alt={post.title}
                  height="60px"
                  width="60px"
                  unoptimized
                  className="align-middle rounded-full"
                  src={post.featuredImage.url}
                />
                <div> */}
                  <Link href={`/post/${post.slug}`} className="text-md" key={index}>{post.title}</Link>
                </div>
                <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
