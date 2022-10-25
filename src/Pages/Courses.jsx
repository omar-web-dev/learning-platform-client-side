import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';
import CoursesList from './CoursesList';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='courses-page flex mt-16'>
            <div className=" inset-0 z-0 w-1/4 px-[8%] static">
                <ul className="menu menu-compact bg-base-100 w-56 p-2 rounded-box px-[8%]">
                    {courses.map(cl => <CoursesList key={cl.id} cl={cl} />)}
                </ul>
            </div>
            <div className="screen grid gap-10 grid-cols-2 items-center justify-center ">
                {courses.map(course => <CourseCard key={course.id} course={course} />)}
            </div>
        </div>
    );
};

export default Courses;