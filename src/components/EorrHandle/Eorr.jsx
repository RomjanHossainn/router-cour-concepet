import React from 'react';
import { useNavigate,Link, useRouteError } from 'react-router-dom';

const Eorr = () => {

    const nevigate = useNavigate()

    const eorr = useRouteError();
    

    const homePageClick = () =>{
        nevigate('/')
    }

    return (
        <div>
            <Link to={'/'}>Go to Home With Link</Link>
            <h3>{eorr.error.message || statusText}</h3>
            <button onClick={homePageClick}>Go To home Page</button>
        </div>
    );
};

export default Eorr;