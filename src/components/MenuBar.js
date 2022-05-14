import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuBar = ({navbarStyle,children }) => {
    return (
        <ul className={navbarStyle}>
            <li>
                <NavLink to="/" className='rounded-lg'>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className='rounded-lg'>About</NavLink>
            </li>
            <li>
                <NavLink to="/services" className='rounded-lg'>Services</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className='rounded-lg'>Contact</NavLink>
            </li>
            <li>
                <NavLink to="/login" className='rounded-lg'>Login</NavLink>
            </li>
            {children}
        </ul>
    );
};

export default MenuBar;