import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">

        <div className="w-full navbar bg-base-100 md:px-20">
          <div className="flex-1 px-2 mx-2">
            <Link to='/' className='text-4xl'> Clean Co!</Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-3">
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
              <div className="dropdown dropdown-hover dropdown-end">
                <label tabIndex="0" className="btn m-1 btn-outline btn-primary">Book Now</label>
                <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><NavLink to="/register" className='rounded-lg'>Register</NavLink></li>
                </ul>
              </div>
            </ul>
          </div>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
        </div>
        {
          children
        }
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-72 bg-base-100">
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
        </ul>
      </div>
    </div >
  );
};

export default Navbar;