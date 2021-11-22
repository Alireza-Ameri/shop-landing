import React from "react";

const Discover = () => {
  return (
    <div className="mt-60 flex justify-center items-center  mb-7">
      <div className="w-540 h-270 bg-gray-200 mx-6 relative">
        <div className="h-8 w-269 ml-9 mt-9  mb-2 ">
          <span className="text-2xl">Luxurious Eyewear </span>
        </div>
        <div className="h-12 w-345 ml-9 mt-3   ">
          <span className="text-base text-gray-500">
            See the beauty of exotic world with the luxurious glasses
          </span>
        </div>
        <div className="h-7 w-28 ml-11  mt-3">
          <span className="text-base">Discover Now</span>
        </div>
        <div className="w-238 h-114 bg-black flex justify-center items-center  absolute right-0 bottom-0 ">
          <span className="text-white text-2xl"> Photo</span>
          <img src=""></img>
        </div>
      </div>
      <div className="w-540 h-270 bg-gray-200 mx-6  relative">
        <div className="h-8 w-269 ml-9 mt-9  mb-2 ">
          <span className="text-2xl">Comfortable Watches </span>
        </div>
        <div className="h-12 w-345 ml-9 mt-3  ">
          <span className="text-base text-gray-500">
            Feels the balancing function and beauty in our wooden watches
          </span>
        </div>
        <div className="h-7 w-28 ml-11  mt-3 ">
          <span className="text-base">Discover Now</span>
        </div>
        <div className="w-238 h-114 bg-black flex justify-center items-center  absolute right-0 bottom-0 ">
          <span className="text-white text-2xl"> Photo</span>
          <img src=""></img>
        </div>
      </div>
    </div>
  );
};

export default Discover;
