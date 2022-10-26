import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Contests/UserContext';

const Header = () => {
    const { users, logOut } = useContext(AuthContext)
    const handelLogOut = () => {
        logOut()
        .then(result => {
            const user = result.user
            console.log(user.uid);
          }).catch((error) => {
            console.log(error.code);
          });
    }    
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
                    {users?.uid &&
                        <>
                            <div   className="avatar">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={users?.photoURL} alt={users?.displayName}/>
                                </div>
                            </div>
                            <ul id='profile' className=" absolute top-12 right-20 menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                {users?.displayName &&
                                    <li><Link>{users?.displayName}</Link></li>
                                }
                                <li><Link>View Profile</Link></li>
                                <li><Link onClick={handelLogOut}>Log Out</Link></li>
                            </ul>
                        </>}
                </div>
            </div>
        </div>
    );
};

export default Header;