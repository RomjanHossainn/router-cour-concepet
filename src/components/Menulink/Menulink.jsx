import React from 'react';
import '../../App.css'
import './Active.css'
import Footer from '../Footer/Footer';
import { NavLink, Outlet, useLocation, useNavigation } from 'react-router-dom';
const Menulink = () => {
    const navigation = useNavigation();
    const pathLocation = useLocation();
    // console.log(pathLocation)
    return (
        <div>
            <nav>
                <ul>
                    
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/posts'}>Posts</NavLink>
                    <NavLink to={'/contact'}>Contact</NavLink>
                    <NavLink to={'/house'}>House</NavLink>
                    <NavLink to={'/users'}>Users</NavLink>
                </ul>
            </nav>
            {
                navigation.state === 'loading' ? <h1>loading</h1>  : <Outlet></Outlet>
            }
            
            <Footer/>
        </div>
    );
};

export default Menulink;