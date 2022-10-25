import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='px-2 lg:px-[10%] bg-gray-100'>
            <div className="navbar px-0 block  bg-gray-100">
                <div className="lg:hidden flex justify-between">

                    <div className="dropdown block">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-[290px] text-center">
                            <li><NavLink className="block md:inline-block py-2 px-3 hover:bg-yellow-700 rounded-md" to="/courses">
                                <div className="flex items-center text-lg relative cursor-pointer whitespace-nowrap">Courses</div></NavLink></li>
                            <li><NavLink className="block md:inline-block py-2 px-3 hover:bg-yellow-700 rounded-md" to="/fqa">
                                <div className="flex items-center relative text-lg cursor-pointer whitespace-nowrap">FQA</div></NavLink></li>
                            <li><NavLink className="block md:inline-block py-2 px-3 text-lg hover:bg-yellow-700 rounded-md" to="/blog">
                                <div className="flex items-center relative cursor-pointer whitespace-nowrap">Blog</div></NavLink></li>
                            <li><NavLink className="block md:inline-block py-2 px-3 text-lg  hover:bg-yellow-700 rounded-md" to="/sign-in">
                                <div className="flex items-center relative cursor-pointer whitespace-nowrap">Sign In</div></NavLink></li>
                        </ul>
                    </div>
                    <Link className="" to="/" >
                        <img className='w-32' src="https://i.ibb.co/vhxyr49/Innovation-Hub-Logo-rgb.png" alt="Innovation-Hub-Logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex justify-between">
                    <Link className="" to="/" >
                        <img className='w-32' src="https://i.ibb.co/vhxyr49/Innovation-Hub-Logo-rgb.png" alt="Innovation-Hub-Logo" />
                    </Link>
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink className="block md:inline-block py-2 px-3 hover:bg-yellow-700 rounded-md" to="/courses">
                            <div className="flex items-center text-lg relative cursor-pointer whitespace-nowrap">Courses</div></NavLink></li>
                        <li><NavLink className="block md:inline-block py-2 px-3 hover:bg-yellow-700 rounded-md" to="/fqa">
                            <div className="flex items-center relative text-lg cursor-pointer whitespace-nowrap">FQA</div></NavLink></li>
                        <li><NavLink className="block md:inline-block py-2 px-3 text-lg hover:bg-yellow-700 rounded-md" to="/blog">
                            <div className="flex items-center relative cursor-pointer whitespace-nowrap">Blog</div></NavLink></li>
                        <li><NavLink className="block md:inline-block py-2 px-3 text-lg  hover:bg-yellow-700 rounded-md" to="/sign-in">
                            <div className="flex items-center relative cursor-pointer whitespace-nowrap">Sign In</div></NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;