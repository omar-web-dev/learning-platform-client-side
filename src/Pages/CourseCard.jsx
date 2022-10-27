import React from 'react';
import { RiPlayCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { id, name, price, lesson, description, img, review } = course

    
    return (
        <div className="max-w-md w-full text-gray-600 shadow-lg rounded-xl p-6">
            <div className="flex flex-col ">
                <div className="relative h-62 w-full mb-3">
                    <div className="absolute flex flex-col top-0 right-0 p-3">
                        <button className="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-100 rounded-full w-8 h-8 text-center p-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg></button>
                    </div>
                    <div className=''>
                        <RiPlayCircleFill className='top-[50%] translate-x-[-50%]
                                        translate-y-[-50%] left-[50%] w-24 h-24 text-white absolute'></RiPlayCircleFill>
                        <img className=" w-full   object-fill  rounded-2xl" src={img} alt="Just a flower" />
                    </div>


                </div>
                <div className="flex-auto justify-evenly">
                    <div className="flex flex-wrap ">
                        <div className="w-full flex-none text-sm flex items-center text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-gray-400 whitespace-nowrap mr-3">{review}</span>
                        </div>
                        <div className="my-2 flex items-center w-full justify-between min-w-0 ">
                            <h2 className="text-lg mr-auto cursor-pointer text-gray-900 hover:text-purple-500 truncate ">
                                {description}
                            </h2>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className="flex space-x-2 text-sm font-medium justify-start">
                            lesson {lesson}
                        </div>
                        <div className="text-xl text-gray-900 font-semibold mt-1">${price}</div>
                    </div>
                    <div className='flex justify-between'>
                    <Link to={`/course/${id}`}>
                        <button className="w-full transition ease-in duration-300 inline-flex items-center text-md font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-md mt-2 hover:bg-purple-600 "><span className='w-full text-center'>Details </span></button>
                    </Link>
                    <Link >
                        <button className="w-full transition ease-in duration-300 inline-flex items-center text-md font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-md mt-2 hover:bg-purple-600 "><span className='w-full text-center'>Get premium access </span></button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;