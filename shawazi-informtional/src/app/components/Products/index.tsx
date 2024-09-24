import React from 'react';
import Image from 'next/image';

const Products = () => {
  return (
    <div className="py-0 px-0 sm:px-4 lg:px-0 bg-white mt-4">
      <div id='Products'> </div>
      <div className="max-w-[1920px] mx-auto lg:px-24">
        <div className="flex items-center justify-center mb-8">
          <hr className="w-1/4 sm:w-1/3 border-t border-[#3E1C00] mb-3" />
          <h1 className="mx-2 sm:mx-4 text-[28px] sm:text-[35px] md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#3E1C00]">Products</h1>
          <hr className="w-1/4 sm:w-1/3 border-t border-[#3E1C00] mb-3" />
        </div>
        <p className="text-center text-black mb-8 text-[18px] sm:text-[20px] md:text-3xl lg:text-4xl mt-2 px-2 sm:px-0">Learn about our products</p>

        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left px-2 sm:px-4 lg:px-0">
            <p className="text-[18px] sm:text-[20px] md:text-2xl lg:text-3xl text-black lg:mr-24">
              Shawazi is a cutting-edge progressive web application designed for both mobile and desktop use. 
              It provides a seamless experience whether you&apos;re accessing it from your smartphone or laptop.
            </p>

          </div>
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <Image
              src="/phone.png"
              alt="phone"
              className="w-auto h-48 sm:h-64 lg:h-80 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start order-2 lg:order-1">
            <Image
              src="/laptop.png"
              alt="Laptop"
              className="w-auto h-48 sm:h-64 lg:h-80 object-contain"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-right order-1 lg:order-2 px-2 sm:px-4 lg:px-0">
            <p className="text-[18px] sm:text-[20px] md:text-2xl lg:text-3xl text-black lg:ml-24">
              The application is optimized for efficient performance on any device, ensuring a dynamic 
              user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;