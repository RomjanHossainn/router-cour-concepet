import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './PostDetails.css'
const PostDetails = () => {
    const postDetailsData = useLoaderData();

    const {id,title,body} = postDetailsData;    
    return (
        <div className='postDetails'>
            <h1>Post ID : {id}</h1>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;

