import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';
const PostCard = ({ post }) =>{
    return (
        <div className='bg-white'>
            {post.title}
            {post.excerpt}
        </div>
            
                    
              
           

    )
}

export default PostCard;