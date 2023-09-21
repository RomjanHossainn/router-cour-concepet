import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {
    
    const userDetailsData = useLoaderData();

    const {email,name,phone} = userDetailsData;


    const navigate = useNavigate();

    const backhandleClick = () => {
        navigate('/users')
    }


    const {userId}  = useParams()

    
    return (
        <div>
            <h1>User Details Name : {name}</h1>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <button onClick={backhandleClick}>back</button>
        </div>
    );
};

export default UserDetails;