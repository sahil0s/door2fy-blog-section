    import React from "react";

    import { getPosts, getPostDetails } from '../src/components/Service/fetchPosts'

    import { PostDetail, CategoryWidget, PostWidget, Comments, CommentsForm } from "../src/components"

    const PostDetails = () => {
        return(
            <div className="container">
                <div className="gird">
                    <div className="gird-d">
                        <PostDetail />
                        
                        <CommentsForm />
                        <Comments />
                    </div>
                    <div className="gird-m">
                        <div>
                        <CategoryWidget />
                        <PostWidget />
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
    export default PostDetails;