import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaFileDownload, FaHandPointRight } from "react-icons/fa";
import Review from './Review';

const Details = () => {
    const notify = () => toast("Downtrod Stat!");
    const detail = useLoaderData()
    const { requirement, title, description, reviews } = detail
    return (
        <div className='flex pl-[7%] pr-[3%]'>
            <div className='  w-3/4'>
                {/* bg-[url("https://i.ibb.co/fkP9kPs/Rectangle-1.png")] */}
                <div className=' bg-no-repeat bg-cover no-react '>
                    <div className='my-bg-image p-[6%] relative justify-center items-center' >
                        <div className='pt-5 pb-5'>
                            <div className='flex justify-between'>
                                <h2 className='text-xl  '>{title}</h2>
                                <div className='flex  border border-blue-500'>
                                    <div className='border-r border-blue-500 text-blue-500 p-2'>FREE PDF</div>
                                    <button onClick={notify} className=' p-2  text-blue-500  hover:text-blue-600'>
                                        <FaFileDownload className='w-5 h-5' />
                                    </button>
                                    <ToastContainer  position="top-center" />
                                </div>
                            </div>
                            <div>
                                <h2 className='py-5 text-2xl font-bold'>Description</h2>
                            </div>
                            <div className='bg-gray-200'>
                                <p className='p-5 '>{description}</p>
                            </div>
                            <p className='mt-3 text-white'></p>
                            <div className='border bg-[#cff7e4]'>
                                <h4 className='text-2xl  p-5 text-[#10d876]'>What is learn this lesson</h4>
                                {detail.lesson.map(fr => <div className='flex px-5 py-2 '><span className='w-10 '>< FaHandPointRight className='bg-[#10d876]  mr-1 mt-1 w-7 h-7 p-1 rounded-full text-[#cff7e4]' /></span><p>{fr}</p></div>)}

                            </div>

                            <div>
                                <h2 className='py-5 text-2xl font-bold'>Requirements</h2>
                            </div>
                            <div className='bg-gray-200'>
                                <p className='p-5 '>{requirement}</p>
                            </div>

                            <button className='btn btn-sm font-semibold my-3 rounded-sm bg-[#F9A51A] hover:border-[#F9A51A] text-black hover:text-gray-100'>Get Premium Access</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-1/4'>
                <h2 className='p-3 text-xl font-bold'>Review</h2>
                {reviews.map(rw => <Review review={rw} />)}
            </div>
        </div>
    );
};

export default Details;