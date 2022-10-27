import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Contests/UserContext';

const HeaderHome = () => {
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
        <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 '>
            <div className="navbar p-0 block">
                <div className="lg:hidden flex justify-between">

                    <div className="dropdown block">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-[290px] text-center">
                            <li>
                                <NavLink className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800" to="/courses">
                                    Courses
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="block md:inline-block py-2 px-3 hover:bg-yellow-700 rounded-md" to="/fqa">
                                    <div className="flex items-center relative text-lg cursor-pointer whitespace-nowrap">FQA</div></NavLink></li>
                            <li><NavLink className="block md:inline-block py-2 px-3 text-lg hover:bg-yellow-700 rounded-md" to="/blog">
                                <div className="flex items-center relative cursor-pointer whitespace-nowrap">Blog</div></NavLink></li>
                            <li><NavLink className="block md:inline-block py-2 px-3 text-lg  hover:bg-yellow-700 rounded-md" to="/sign-in">
                                <div className="flex items-center relative cursor-pointer whitespace-nowrap">Sign In</div></NavLink></li>
                            {!users?.uid ?
                                <ul className="menu menu-horizontal p-0">
                                    <li>
                                        <NavLink className="block md:inline-block py-2 px-3 hover:bg-yellow-700 rounded-md" to="/courses">
                                            <div className="flex items-center text-lg relative cursor-pointer whitespace-nowrap">Log in</div>
                                        </NavLink>
                                    </li>
                                </ul>
                                :
                                users?.uid &&
                                <>
                                    <div className="avatar ">
                                        <div className="w-10 mt-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={users?.photoURL} alt={users?.displayName} />
                                        </div>
                                    </div>
                                    <ul id='profile' className=" absolute -bottom-24 right-20 menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                        {users?.displayName &&
                                            <li><Link>{users?.displayName}</Link></li>
                                        }
                                        <li><Link>View Profile</Link></li>
                                        <li><Link onClick={handelLogOut}>Log Out</Link></li>
                                    </ul>
                                </>}
                        </ul>

                    </div>
                    <Link className="" to="/" >
                        <img className='w-28' src="https://i.ibb.co/vhxyr49/Innovation-Hub-Logo-rgb.png" alt="Innovation-Hub-Logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex justify-between">
                    <Link className="" to="/" >
                        <img className='w-28' src="https://i.ibb.co/vhxyr49/Innovation-Hub-Logo-rgb.png" alt="Innovation-Hub-Logo" />
                    </Link>
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <NavLink className="text-gray-800 dark:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800" to="/home">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800" to="/courses">
                                Courses
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800" to="/fqa">
                                FQA
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800" to="/blog">
                                Blog
                            </NavLink>
                        </li>

                    </ul>
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <NavLink className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800" to="/sing-in">
                                Log in
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" to="/sign-up">
                                Registration
                            </NavLink>
                        </li>
                        <li>
                            <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                                <span>light</span>
                                <span className="relative">
                                    <input id="Toggle1" type="checkbox" className="hidden peer" />
                                    <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                                </span>
                                <span>dark</span>
                            </label>
                        </li>

                    </ul>
                    {users?.uid &&
                        <>
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={users?.photoURL} alt={users?.displayName} />
                                </div>
                            </div>
                            <ul id='profile' className=" absolute top-12 right-20 menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                {users?.displayName &&
                                    <li><Link>{users?.displayName}</Link></li>
                                }
                                <li><Link>View Profile</Link></li>
                                <li><Link onClick={handelLogOut}>Log Out</Link></li>
                                <li>
                            <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                                <span>light</span>
                                <span className="relative">
                                    <input id="Toggle1" type="checkbox" className="hidden peer" />
                                    <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                                </span>
                                <span>dark</span>
                            </label>
                        </li>
                            </ul>
                        </>}
                </div>
            </div>
        </nav>
    );
};

export default HeaderHome;