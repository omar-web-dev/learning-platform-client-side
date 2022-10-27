import React from 'react';
import { Link } from 'react-router-dom';

const CoursesList = ({cl}) => {
    return (
        <>
            <li className='uppercase hover:text-blue-500'><Link to={`../course/${cl.id}`}> {cl.name}</Link></li>
        </>
    );
};

export default CoursesList

