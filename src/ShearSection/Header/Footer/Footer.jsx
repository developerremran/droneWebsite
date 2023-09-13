import React from 'react';

const Footer = () => {
    return (
        <div className='w-full bg-black h-[600px] p-10'>
            <div className=' flex justify-between maxWidth'>
                <div className='text-white w-full'>
                    <h2 className='text-7xl'>Ready to get started</h2>
                    <button className='border p-5 mt-10'>Get Started</button>
                </div>
                <div className='w-full'>
                    <div className=' text-white space-y-4'>
                        <h2 className='text-4xl font-semibold'>Have any question to FAQ</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nesciunt delectus officiis quasi, repellat possimus quia placeat quos suscipit aspernatur tenetur accusamus odio illum tempora recusandae, alias ullam quam enim!</p>
                    </div>

                    <div>
                        <div>
                             <h3 className='text-2xl'>Email</h3>
                             
                        </div>
                        <div></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;