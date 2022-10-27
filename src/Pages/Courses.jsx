import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../SharePage/Header';
import CourseCard from './CourseCard';
import CoursesList from './CoursesList';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <>
        <div className='courses-page block md:flex mt-2 md:mt-16'>
            <div className=" inset-0 z-0 md:w-1/4 px-[8%] ">
                <ul className="items-baseline menu menu-compact bg-base-100 w-full flex-wrap  md:w-56 sticky top-16 pr-5 mt-6 md:flex justify-between md:flex-col flex-row">
                    {courses.map(cl => <CoursesList key={cl.id} cl={cl} />)}
                </ul>
            </div>
            <div className="px-4 screen grid gap-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-center justify-center ">
                {courses.map(course => <CourseCard key={course.id} course={course} />)}
            </div>
        </div>
        </>
    );
};

export default Courses;