import React from 'react';

const CountSection = () => {
    return (
        <div className='w-full h-[200px] bg-black text-white'>
            <div className='maxWidth grid grid-cols-4 gap-5 h-[200px] justify-center items-center'>
                <div className='border text-center '>
                    <h2 className='text-8xl italic text-white'>400</h2>
                    <p>Lorem Ispum Lera</p>
                </div>
                <div className='border text-center '>
                    <h2 className='text-8xl italic text-white'>400</h2>
                    <p>Lorem Ispum Lera</p>
                </div>
                <div className='border text-center '>
                    <h2 className='text-8xl italic text-white'>400</h2>
                    <p>Lorem Ispum Lera</p>
                </div>
                <div className='border text-center '>
                    <h2 className='text-8xl italic text-white'>400</h2>
                    <p>Lorem Ispum Lera</p>
                </div>
                
            </div>
            
        </div>
    );
};

export default CountSection;