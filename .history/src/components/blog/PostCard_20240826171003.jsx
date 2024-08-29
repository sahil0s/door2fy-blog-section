import React from 'react'

const PostCard = ({post }) =>{
    return (
        <>
            {posts.map((posts, index) => (
                <div>
                    {posts.title}
                    {posts.excerpt}
                </div>
            )) }

        </>
    )
}

export default PostCard;