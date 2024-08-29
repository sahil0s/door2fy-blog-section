import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ''

import { getRecentPosts,getSimilarPosts } from '../Service/fetchPosts';


const Postwidget = ({ categories, slug }) =>{
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if(sulg) {
            getSimilarPosts(categories, slug)
                .then((result) => setRelatedPosts(result))
        }else{
            getRecentPosts()
                .then((result) => setRelatedPosts(result))
        }
    }, [slug])

    console.log(relatedPosts)

    return (
        <div className='PostWidget'>
            <h1>Postwidget</h1>
        </div>
    )
}

export default Postwidget; 