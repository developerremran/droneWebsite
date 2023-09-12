import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
                className="bg-cover bg-center h-[800px] relative"
                style={{
                    backgroundImage:
                        "url('https://i.ibb.co/s2Qd33Q/medical-appointment-doctor-healthcare-40568.webp')",
                }}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="maxWidth  h-[800px] relative px-2">
                    <div className="flex flex-col h-full space-y-8  justify-center   text-white">
                        <h3 className="text-md  font-semibold">Professional Drone Service</h3>
                        <h3 className="md:text-7xl text-3xl  font-bold uppercase md:leading-[100px]">Photography & videoGraphy <br /> Inoovation with drone</h3>

                        <div>
                        <p className='text-xl '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora facilis ipsam magnam eos quo blanditiis fuga <div className='md:block hidden'><br/></div> deleniti, pariatur nisi vero veritatis commodi esse libero. Non odio aspernatur pariatur eius aliquid.</p>
                        </div>
                        {/* Add more content here */}

                        <div className='mt-10 flex gap-10'>
                            <button className='bg-blue-300 md:px-16 px-8 py-3 md:py-5 text-xl text-black font-bold'>Get Started</button>
                            <button className='bg-blue-300 md:px-16 px-8 md:py-5 py-3 text-xl text-black font-bold'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;