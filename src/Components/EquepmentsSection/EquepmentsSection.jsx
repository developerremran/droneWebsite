import React from 'react';
import { AiFillCheckCircle } from 'react-icons/Ai';


const EquepmentsSection = () => {
    return (
        <div className='maxWidth'>
            {/* first component  */}
            <div className='grid grid-cols-3  justify-between gap-10'>
                <div className='text-center border space-y-5 p-5 '>
                    <div className=' flex justify-center'>
                        <AiFillCheckCircle className='text-8xl text-sky-500'></AiFillCheckCircle>
                    </div>
                    <h2 className='text-2xl font-semibold'>$k GO FPS</h2>
                    <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
                </div>

                <div>

                </div>

                <div className='text-center border space-y-5 p-5'>
                    <div className=' flex justify-center'>
                        <AiFillCheckCircle className='text-8xl text-sky-500'></AiFillCheckCircle>
                    </div>
                    <h2 className='text-2xl font-semibold'>$k GO FPS</h2>
                    <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

            {/* 2nd Components  */}
            <div className='grid grid-cols-3  justify-between gap-10 -mt-10 p-5  items-center '>
                <div>

                </div>

                <div className='text-center border rounded-full bg-blue-300 flex flex-col justify-center h-[400px]   space-y-5 p-5'>
                    <div className=' flex justify-center'>
                        <AiFillCheckCircle className='text-8xl text-sky-500'></AiFillCheckCircle>
                    </div>
                    <h2 className='text-2xl font-semibold'>$k GO FPS</h2>
                    <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
                </div>

                <div>

                </div>
            </div>

            {/* 3rd Components  */}

            <div className='grid grid-cols-3  justify-between gap-10 mx-28'>
                <div className='text-center border space-y-5 p-5 '>
                    <div className=' flex justify-center'>
                        <AiFillCheckCircle className='text-8xl text-sky-500'></AiFillCheckCircle>
                    </div>
                    <h2 className='text-2xl font-semibold'>$k GO FPS</h2>
                    <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
                </div>

                <div>

                </div>

                <div className='text-center border space-y-5 p-5'>
                    <div className=' flex justify-center'>
                        <AiFillCheckCircle className='text-8xl text-sky-500'></AiFillCheckCircle>
                    </div>
                    <h2 className='text-2xl font-semibold'>$k GO FPS</h2>
                    <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

            {/* button center  */}
               
               <div className='flex justify-center my-10'>
                <button className='px-12 font-semibold text-xl py-4 bg-orange-300  border'>Get Started</button>
               </div>
        </div>

    );
};

export default EquepmentsSection;