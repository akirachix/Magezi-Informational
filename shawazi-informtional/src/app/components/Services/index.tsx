import React from 'react';

const Services = () => {
  return (
    <div className="font-jost mx-[3%] px-[3%] py-2 mb-16 mt-4">
      <section>
        <div id='Services'> </div>
        <div className="flex items-center justify-center mb-8">
          <hr className="w-1/2 border-t border-primary" />
          <h1 className="mx-5 text-[28px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary">Services</h1>
          <hr className="w-1/2 border-t border-primary" />
        </div>
        <p className="text-center text-black mb-8 text-[18px] sm:text-[20px] md:text-3xl lg:text-4xl mt-[4px]">Explore our services and their impact</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-24">
          <div className="flex items-start max-w-[600px]">
            <div className="mr-4 flex-shrink-0">
              <img src="/search.png" alt="Search" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-1 text-secondary">Search</h3>
              <p className="text-[18px] sm:text-[20px] md:text-2xl lg:text-3xl text-black">
                Explore available land options, view detailed information, and gain insights about each property.
              </p>
            </div>
          </div>

          <div className="flex items-start max-w-[600px]">
            <div className="mr-4 flex-shrink-0">
              <img src="/contracts.png" alt="Contracts" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-1 text-secondary">Contracts</h3>
              <p className="text-[18px] sm:text-[20px] md:text-2xl lg:text-3xl text-black">
                Efficient and secure transactions with smart contracts for automated, transparent agreements.
              </p>
            </div>
          </div>

          <div className="flex items-start max-w-[600px] mt-[10%]">
            <div className="mr-4 flex-shrink-0">
              <img src="/transactions.png" alt="Transactions" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-1 text-secondary">Transactions</h3>
              <p className="text-[18px] sm:text-[20px] md:text-2xl lg:text-3xl text-black">
                Enhanced security with encrypted communications, verified payments, and secure data storage for trustworthy transactions.
              </p>
            </div>
          </div>

          <div className="flex items-start max-w-[600px] mt-[10%]">
            <div className="mr-4 flex-shrink-0">
              <img src="/negotiations.png" alt="Negotiations" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-1 text-secondary">Negotiations</h3>
              <p className="text-[18px] sm:text-[20px] md:text-2xl lg:text-3xl text-black">
                Secure chatroom for negotiations, ensuring privacy and trust throughout the discussion. The chatroom allows users to invite their preferred lawyers to join the system.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;