import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Blog.css'; // Import the Blog.css file


import { getRecentPosts,getSimilarPosts } from '../Service/fetchPosts';


const Postwidget = ({ categories, slug }) =>{
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if(slug) {
            getSimilarPosts(categories, slug)
                .then((result) => setRelatedPosts(result))
        }else{
            getRecentPosts()
                .then((result) => setRelatedPosts(result))
        }
    }, [slug])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(get); // Replace with your API endpoint
            const data = await response.json();
            console.log(data); // Check if data is fetched correctly
            setRelatedPosts(data.posts); // Update state with fetched data
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, []);

    console.log(relatedPosts)

    // return (
    //     <div className='PostWidget'>
    //         <h3>
    //             {slug ? 'Related posts' : "Recent Posts"}
    //         </h3>
    //         {/* // Assuming relatedPosts is properly defined and contains post objects */}
    //             {relatedPosts.map((post) => (
    //             <div key={post.title} className="flex items-center w-full mb-4">
    //                 <div className="w-16 flex-none">
    //                 <img 
    //                     alt={post.title}
    //                     height="60"  // Use numbers without units for height and width attributes
    //                     width="60"
    //                     className="align-middle rounded-full"
    //                     src={post.featuredImage.url}  // Ensure the URL is valid
    //                 />
    //                 </div>
    //                 {/* Optionally add more content here, e.g., post title */}
    //                 <div className="ml-4">
    //                 <h3 className="text-lg font-semibold">{post.title}</h3>
    //                 </div>
    //             </div>
    //             ))}

    //     </div>
    // )
    // Inside your component
                return (
                    <div className='PostWidget'>
                        <h3>
                              {slug ? 'Related posts' : "Recent Posts"}
                        </h3>
                    {relatedPosts.length > 0 ? (
                        relatedPosts.map((post) => (
                        <div key={post.title} className="flex items-center w-full mb-4">
                            <div className="w-16 flex-none">
                            <img
                                alt={post.title}
                                height="60"
                                width="60"
                                className="align-middle rounded-full"
                                src={post.featuredImage.url}
                            />
                            </div>
                            <div className="ml-4">
                            <h3 className="text-lg font-semibold">{post.title}</h3>
                            </div>
                        </div>
                        ))
                    ) : (
                        <p>No related posts available.</p>
                    )}
                    </div>
                );
  
}

export default Postwidget; 