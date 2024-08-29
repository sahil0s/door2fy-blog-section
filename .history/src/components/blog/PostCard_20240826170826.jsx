import React from 'react'

const PostCard = () =>{
    return (
        <>
            {posts.map((post, index) => (
                <div>
                    {post.title}
                    {post.ex}
                </div>
            )) }

        </>
    )
}

export default PostCard;