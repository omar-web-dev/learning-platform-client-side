import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaHandPointRight } from "react-icons/fa";

const Details = () => {
    const detail = useLoaderData()
    const { name, img, title, description } = detail
    return (
        <div className='flex'>
            <div className='border pl-[9%] pr-[4%] w-3/4'>
                {/* bg-[url("https://i.ibb.co/fkP9kPs/Rectangle-1.png")] */}
                <div className=' bg-no-repeat bg-cover no-react '>
                    <div className='my-bg-image p-[6%] relative justify-center items-center' >
                        <div className='pt-5 pb-5'>
                            <div className='flex justify-between'>
                                <div className='bg-yellow-500  text-lg mb-3 py-2 px-5 uppercase rounded-md inline-block'>{name}</div>
                                <button className='btn btn-info'> PDF</button>
                            </div>
                            <h2 className='text-5xl  '>{title}</h2>
                            <p className='mt-3 text-white'></p>
                            <div className='border bg-[#cff7e4]'>
                                <h4 className='text-2xl  p-5 text-[#10d876]'>What is learn this lesson</h4>
                                {detail.lesson.map(fr => <div className='flex px-5 py-2 '><span className='w-10 '>< FaHandPointRight className='bg-[#10d876]  mr-1 mt-1 w-7 h-7 p-1 rounded-full text-[#cff7e4]'/></span><p>{fr}</p></div>)}

                            </div>
                            <div>
                                <h2 className='py-5 text-2xl font-bold'>Description</h2>
                            </div>
                            <div className='bg-gray-200'>
                                <p className='p-5 '>{description}</p>
                            </div>
                            <button className='btn btn-sm font-semibold my-3 rounded-sm bg-[#F9A51A] text-black'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border w-1/4'>033</div>
        </div>
    );
};

export default Details;