import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Premium = () => {
    const premium = useLoaderData()
    console.log(premium);
    return (
        <div className='flex h-60 align-middle justify-center  items-center'>
            <p className='uppercase  p-16  border'><span className='text-yellow-500'>{premium.name}</span> course perseused</p>

        </div>
    );
};

export default Premium;