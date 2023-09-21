import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './User.css'
const User = ({user}) => {
    const {name,email,phone,id} = user;
    const userStyle = {
        border : '1px solid blue',
        padding : '10px',
        margin : '5px',
        borderRadius : '5px'
        
    }

    const naviget = useNavigate();



    const showClickDetails = () => {
        naviget(`/user/${id}`)
    }


    return (
        <div style={userStyle} className='card'>
            <h2>User Name : {name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/user/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={showClickDetails}>Show CLICK Details</button>
        </div>
    );
};

export default User;