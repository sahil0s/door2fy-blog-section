import React from 'react'

const PostCard = () =>{
    return (
        <>
            {posts.map((post, index) => (
                <div>
                    {post.title}
                </div>
            )) }

        </>
    )
}

export default PostCard;