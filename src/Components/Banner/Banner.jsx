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

                <div className="maxWidth  h-[800px] relative">
                    <div className="flex flex-col h-full   justify-center   text-white">
                        <h3 className="text-md  font-semibold">Professional Drone Service</h3>
                        <h3 className="text-7xl  font-bold uppercase leading-[100px]">Photography & videoGraphy <br /> Inoovation with drone</h3>

                        <p className='text-xl '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora facilis ipsam magnam eos quo blanditiis fuga <br /> deleniti, pariatur nisi vero veritatis commodi esse libero. Non odio aspernatur pariatur eius aliquid.</p>
                        {/* Add more content here */}

                        <div className='mt-10 flex gap-10'>
                            <button className='bg-blue-300 px-16 py-5 text-xl text-black font-bold'>Get Started</button>
                            <button className='bg-blue-300 px-16 py-5 text-xl text-black font-bold'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;