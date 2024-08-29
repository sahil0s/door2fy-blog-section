import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


const Postwidget = ({ categories, slug }) =>{
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if(sulg) {
            getSimilarPosts(category, slug)
                .then((result) => setRelatedPosts(result))
        }else{
            getPosts(category, slug)
                .then((result) => setRelatedPosts(result))
        }
    }, [input])
    return (
        <>
            <h1>Postwidget</h1>
        </>
    )
}

export default Postwidget; 