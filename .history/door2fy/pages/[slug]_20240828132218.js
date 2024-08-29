    import React from "react";

    import { getPosts, getPostDetails } from '../src/components/Service/fetchPosts'

    import { PostDetail, CategoryWidget, PostWidget, Comments, CommentForm } from "../src/components"

    const PostDetails = () => {
        return(
            <div className="container">
                <div className="gird">
                    <div className="gird-d">
                        <PostDetail />
                        
                        <CommentForm />
                        <Comments />
                    </div>
                    <div className="gird-m">
                        <div>
                        <CategoryWidget />
                        <
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
    export default PostDetails;