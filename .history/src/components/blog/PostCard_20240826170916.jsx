import React from 'react'

const PostCard = () =>{
    return (
        <>
            {posts.map((post, index) => (
                <div>
                    {posts.title}
                    {posts.excerpt}
                </div>
            )) }

        </>
    )
}

export default PostCard;