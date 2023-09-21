import React from 'react';
import './Post.css'
import { Link, useParams } from 'react-router-dom';
const Post = ({post}) => {
   
    const {title,body,id} = post;
    return (
        <div className='post'>
            <h1>Post Id : {id}</h1>
            <p>{title}</p>
            <p>{body}</p>
            <Link to={`/post/${id}`}><button>Show Post Detais</button></Link>
        </div>
    );
};

export default Post;