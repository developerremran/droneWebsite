import React from 'react';


import img from '../../assets/RecentWork/hintersee-3601004_1280.jpg'

const Expertis = () => {
    return (
        <div>
             <div className="mt-24">
      <div className="md:flex  items-center h-full">
        <div className="bg-gray-950 md:w-1/2 py-20 ">
          <div className="px-16">
            <h5 className="text-cyan-600 text-xl font-semibold uppercase">
              Our expertise
            </h5>
            <h2 className="text-white text-4xl uppercase font-bold pt-5">
              We are professional in the field aerial & drone
            </h2>
            <div className="text-gray-500 text-start text-xl space-y-5 pt-10">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                iure smod empor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim venial, quis nostrud xerciatation ullamco.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                iure smod empor incididunt ut labore et
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                doeiu
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
            <div className="py-10 text-center space-y-5 md:space-y-5 grid items-center justify-center mx-auto grid-cols-1 md:grid-cols-3">
              <div>
                <h2 className="text-5xl text-white">789</h2>
                <p className="text-base font-semibold text-cyan-500">
                  Lorem ipsum Lorem
                </p>
              </div>
              <div>
                <h2 className="text-5xl text-white">789</h2>
                <p className="text-base font-semibold text-cyan-500">
                  Lorem ipsum Lorem
                </p>
              </div>
              <div>
                <h2 className="text-5xl text-white">789</h2>
                <p className="text-base font-semibold text-cyan-500">
                  Lorem ipsum Lorem
                </p>
              </div>
            </div>
            <button className="text-xl font-bold uppercase bg-cyan-500 px-8 py-3">
              get started
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <img className="h-[836px] inset-0 z-10 " src={img} alt="" />
          <div className="absolute inset-0 bg-cyan-50 opacity-50 z-20"></div>
          <div className="bg-teal-500 absolute space-y-4 -bottom-28 w-5/12 right-0 py-10 px-5 z-50">
            <h3 className="text-xl font-semibold">
              Ready to embrace the future
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              delectus voluptates consequatur corporis quia incidunt!
            </p>
            <h2 className="text-xl font-medium">Overview </h2>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Expertis;