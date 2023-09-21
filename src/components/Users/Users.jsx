import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './Users.css'
const Users = () => {
    const users  = useLoaderData();

    return (
        <div>
            <h1>User Data laod</h1>
            <div className='usersItem'>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                    
                }
            </div>
        </div>
    );
};

export default Users;