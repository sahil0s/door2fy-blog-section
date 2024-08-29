import React from 'react'

const PostCard = () =>{
    return (
        <>
            {posts.map((post, index) => (
                <div>
                    {post.title}
                    {post.excer}
                </div>
            )) }

        </>
    )
}

export default PostCard;