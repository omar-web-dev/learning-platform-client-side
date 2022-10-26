import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const detail = useLoaderData()
    console.log(detail);
    return (
        <div className='flex'>
            <div className='border w-1/4'>
                sdfdd
            </div>
            <div className='border w-2/4'>
                
            </div>
            <div className='border w-1/4'>033</div>
        </div>
    );
};

export default Details;