import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuBar from './MenuBar';

const Navbar = ({ children }) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-100 sticky top-0 md:px-20 z-20">
          <div className="flex-1 px-2 mx-2">
            <Link to='/' className='text-4xl'> Clean Co!</Link>
          </div>
          <div className="flex-none hidden lg:block">
            <MenuBar navbarStyle='menu menu-horizontal gap-3'>
              <div className="dropdown dropdown-hover dropdown-end">
                <label tabIndex="0" className="btn m-1 btn-outline btn-primary">Book Now</label>
                <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><NavLink to="/register" className='rounded-lg'>Register</NavLink></li>
                </ul>
              </div>
            </MenuBar>
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
          <MenuBar navbarStyle="menu p-4 overflow-y-auto w-72 bg-base-100"></MenuBar>
      </div>
    </div >
  );
};

export default Navbar;