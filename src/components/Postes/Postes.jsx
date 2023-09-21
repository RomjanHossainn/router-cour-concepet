import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';
import './Post.css'
const Postes = () => {
    const postesData = useLoaderData();
    
    return (
        <div>
            <h2>All Post Data</h2>
            <div className='allpost'>
                {
                    postesData.map(post => <Post key={post.id} post = {post}/>)
                }
            </div>
        </div>
    );
};

export default Postes;