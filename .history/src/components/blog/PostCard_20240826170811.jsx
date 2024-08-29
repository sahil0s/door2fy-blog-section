import React from 'react'

const PostCard = () =>{
    return (
        <>
            {posts.map((post, index) => (
                <div>
                    {post}
                </div>
            )) }

        </>
    )
}

export default PostCard;