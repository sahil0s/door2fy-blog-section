import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';
import { MdPodcasts } from 'react-icons/md';

const PostCard = ( { posts } ) =>{
    console.log(posts);
    return (
        <div className="another-page">
          {posts && post.length > 0 ? (
            posts.map((post) => <PostCard key={post.node.slug} post={post} />)
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      );
}

export default PostCard;


// import React from 'react';
// import PostCard from './PostCard';

// const AnotherPage = ({ posts }) => {
//   return (
//     <div className="another-page">
//       {posts && posts.length > 0 ? (
//         posts.map((post) => <PostCard key={post.node.slug} post={post} />)
//       ) : (
//         <p>No posts available.</p>
//       )}
//     </div>
//   );
// };

// export default AnotherPage;
