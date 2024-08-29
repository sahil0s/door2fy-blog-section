import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';
const PostCard = ({ post }) =>{
    return (
        <div className='bg-white shadoq-lg rounded-lg p-0 lg:p-8 pb-12 mb'>
            {post.title}
            {post.excerpt}
        </div>
            
                    
              
           

    )
}

export default PostCard;