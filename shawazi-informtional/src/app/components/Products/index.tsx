import React from 'react';

const Products = () => {
  return (
    <div className="py-16 px-4 sm:px-8 lg:px-0 bg-white">
      <div className="max-w-[1920px] mx-auto lg:px-24">
        <div className="flex items-center justify-center mb-8">
          <hr className="w-1/2 border-t border-[#3E1C00] mb-3" />
          <h1 className="mx-4 text-[35px] md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#3E1C00]">Products</h1>
          <hr className="w-1/2 border-t border-[#3E1C00] mb-3" />
        </div>
        <p className="text-center text-black mb-8 text-[20px] sm:text-[25px] md:text-3xl lg:text-4xl mt-2">Learn about our products</p>

        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left \[p0" >
            <p className="text-[20px] sm:text-[25px] md:text-2xl lg:text-3xl text-black">
              Shawazi is a cutting-edge progressive web application designed for both mobile and desktop use. 
              It provides a seamless experience whether you're accessing it from your smartphone or laptop.
            </p>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <img
              src="/phone.png"
              alt="phone"
              className="w-auto h-48 sm:h-64 lg:h-80 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start order-2 lg:order-1">
            <img
              src="/laptop.png"
              alt="Laptop"
              className="w-auto h-48 sm:h-64 lg:h-80 object-contain"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-right order-1 lg:order-2 mx-24">
            <p className="text-[20px] sm:text-[25px] md:text-2xl lg:text-3xl text-black mx-20">
              The application is optimized for efficient performance on any device, ensuring a dynamic 
              user experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;