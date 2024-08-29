import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';
import { MdPodcasts } from 'react-icons/md';
import './Blog.css'; // Import the Blog.css file

const PostCard = ({ post }) => {
    return (
      <div className="post-card ">
        <div className='postcard-inner'>
        <img src={post.node.featuredImage.url} alt={post.node.title} /> 
            <h2><Link href={`/post/${post.slug}`}>{post.node.title}</Link></h2>
            <p>{post.node.excerpt}</p>
            
            <div className="post-meta">
            <p>By {post.node.admin.name}</p>
            <p>Category: {post.node.category.name}</p>
            <p>Published on: {new Date(post.node.createdAt).toDateString()}</p>
            </div>
            <div className='button'>
                <Link href={`/post`}>
                
                </Link>
            </div>
        </div>
      </div>
    );
  };

export default PostCard;



