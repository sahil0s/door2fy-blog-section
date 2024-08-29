import React from 'react'

const PostCard = () =>{
    return (
        <>
            {posts.map((post, index) => (
                <div>
                    {posts.title}
                    {post.excerpt}
                </div>
            )) }

        </>
    )
}

export default PostCard;