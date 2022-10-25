import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="absolute opacity-100 z-50 text-black bg-white w-full flex justify-between items-center mx-auto px-8 h-20">
            <div className='flex justify-between'>
                <div className="inline-flex items-center pr-5">
                    <Link className="" to="/" >
                    <img className='w-32' src="https://i.ibb.co/vhxyr49/Innovation-Hub-Logo-rgb.png" alt="Innovation-Hub-Logo" />
                    </Link>
                </div>
            </div>

            <div className="flex-initial">
                <div className="flex justify-end items-center relative">
                    <div className="block md:flex mr-4 items-center">
                        
                        <Link className="block md:inline-block py-2 px-3 hover:bg-yellow-700 rounded-md" to="/courses">
                            <div className="flex items-center text-lg relative cursor-pointer whitespace-nowrap">Courses</div>
                        </Link>
                        <Link className="block md:inline-block py-2 px-3 hover:bg-yellow-700 rounded-md" to="/fqa">
                            <div className="flex items-center relative text-lg cursor-pointer whitespace-nowrap">FQA</div>
                        </Link>
                        <Link className="block md:inline-block py-2 px-3 text-lg hover:bg-yellow-700 rounded-md" to="/blog">
                            <div className="flex items-center relative cursor-pointer whitespace-nowrap">Blog</div>
                        </Link>
                        <Link className="block md:inline-block py-2 px-3 text-lg  hover:bg-yellow-700 rounded-md" to="/log-in">
                            <div className="flex items-center relative cursor-pointer whitespace-nowrap">LogIn</div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;