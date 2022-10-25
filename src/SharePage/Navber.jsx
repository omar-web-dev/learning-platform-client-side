import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navber = () => {
    return (
        <div className='px-2 lg:px-[10%] bg-gray-100'>
            <div className="navbar px-0 block  bg-gray-100">
                <div className=" flex justify-between">

                    <div className="dropdown block">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-[290px] text-center">
                            <li><NavLink to='/home'
                                aria-label='Home'
                                title='Home'>Home</NavLink></li>
                            <li><NavLink to='/quiz'
                                aria-label='Quiz'
                                title='Quiz'>Quiz</NavLink></li>
                            <li><NavLink to='/statistics'
                                aria-label='Statistics'
                                title='Statistics'>Statistics </NavLink></li>
                            <li><NavLink to='/blog'
                                aria-label='Blog'
                                title='Blog'>Blog</NavLink></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl lg:hidden  flex">Quizzes</Link>
                </div>
                <div className="navbar-center hidden lg:flex justify-between">
                    <Link to='/' className="btn btn-ghost normal-case text-xl lg:flex hidden ">Quizzes</Link>
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink to='/home'
                            aria-label='Home'
                            title='Home'>Home</NavLink></li>
                        <li><NavLink to='/quiz'
                                aria-label='Quiz'
                                title='Quiz'>Quiz</NavLink></li>
                        <li><NavLink to='/statistics'
                            aria-label='Statistics'
                            title='Statistics'>Statistics </NavLink></li>
                        <li><NavLink to='/blog'
                            aria-label='Blog'
                            title='Blog'>Blog</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navber;