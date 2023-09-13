import React from 'react';

const ReviewSection = () => {
    return (
        <div className=' maxWidth'>
            <div className='mt-[200px]'>


                <div
                    className="bg-cover bg-center h-[600px] relative"
                    style={{
                        backgroundImage:
                            "url('https://i.ibb.co/s2Qd33Q/medical-appointment-doctor-healthcare-40568.webp')",
                    }}
                >
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                    <div className="  h-[600px] relative px-20 flex gap-[80px]">
                        <div className='w-[80%]'>
                            <img className=' h-[700px] -mt-[50px]' src="https://i.ibb.co/s5wYSx0/221006-Sports-Category-Football.jpg" alt="" />
                        </div>
                        <div className="flex flex-col h-full space-y-8  justify-center   text-white">
                            <h3 className="text-md  font-semibold">Professional Drone Service</h3>
                            <h3 className="md:text-3xl text-3xl  font-bold uppercase ">Photography & videoGraphy <br /> Inoovation with drone</h3>

                            <div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quam magnam cum voluptatem labore, laborum dolorem incidunt similique repellendus alias ea eligendi aliquam suscipit sapiente quo repudiandae saepe eaque? Fuga!</p>
                            </div>
                            {/* Add more content here */}
                            <div className='flex gap-5 items-center'>
                                <img className='w-[100px] h-[100px] rounded-full' src="https://i.ibb.co/b5D6DyL/7-77391-businessman-transparent-business-man-png.jpg" alt="" />

                                <div>
                                    <h2 className='text-xl font-semibold'>Jhon Doe</h2>
                                    <h2>CEO BY ....</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;