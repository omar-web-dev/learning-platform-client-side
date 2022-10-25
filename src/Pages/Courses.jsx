import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const Courses = () => {
    const courses = useLoaderData()
    console.log(courses);
    return (
        <div className='courses-page px-[10%]'>
            <div className="inset-0 z-0"></div>
            <div className="screen grid gap-10 grid-cols-3 items-center justify-center ">
                    {courses.map(course => <CourseCard key={course.id} course={course}/>)}
            </div>
        </div>
    );
};

export default Courses;