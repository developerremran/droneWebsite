import React from 'react';

const CountSection = () => {
    return (
        <div className='w-full md:h-[200px] bg-black text-white md:py-0 py-4 px-4 md:px-0 '>
            <div className='maxWidth grid md:grid-cols-4 grid-cols-1 gap-5 md:h-[200px] h-auto justify-center items-center'>
                <div className=' text-center '>
                    <h2 className='text-8xl italic text-white'>400</h2>
                    <p>Lorem Ispum Lera</p>
                </div>
                <div className=' text-center '>
                    <h2 className='text-8xl italic text-white'>400</h2>
                    <p>Lorem Ispum Lera</p>
                </div>
                <div className=' text-center '>
                    <h2 className='text-8xl italic text-white'>400</h2>
                    <p>Lorem Ispum Lera</p>
                </div>
                <div className=' text-center '>
                    <h2 className='text-8xl italic text-white'>400</h2>
                    <p>Lorem Ispum Lera</p>
                </div>
                
            </div>
            
        </div>
    );
};

export default CountSection;