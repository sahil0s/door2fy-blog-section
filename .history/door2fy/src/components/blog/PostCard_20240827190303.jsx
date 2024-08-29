import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './Blog.css'; // Import the Blog.css file

const PostCard = ({ post }) => {
    return (
        <div className="post-card">
            <div className="postcard-inner">
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <img src={post.featuredImage.url} alt={post.title} />
                <div className="post-meta">
                    <p>By {post.admin.name}</p>
                    <p>Category: {post.category.name}</p>
                    <p>Published on: {moment(post.createdAt).format('MMMM Do, YYYY')}</p>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
