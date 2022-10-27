import React from 'react';

const Review = ({ review }) => {
    console.log(review);
    const {name, img, date, rating, description} = review
    return (
        <div className="m-3 mb-8 rounded-lg border border-gray-200 shadow-sm ">
            <figcaption className=" justify-center p-4 items-center">
                <div className='flex justify-between '>
                    <div className="flex pl-1">
                        <img className="w-9 h-9 rounded-full" src={img} alt="profile picture" />
                        <div className="space-y-0.5 ml-3 font-medium dark:text-white text-left">
                            <div className='text-gray-900'>{name}</div>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">{date}</div>
                        </div>
                    </div>
                    <p>{rating}</p>
                </div>
                <p className='m-0 p-0'>{description}</p>
            </figcaption>
        </div>

    );
};

export default Review;