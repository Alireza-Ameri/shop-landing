import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = () => {
  return (
    <div className=" flex justify-center  relative ">
      <div className="w-1010 h-505 bg-gray-200 flex  pt-14 flex-col items-center ">
        <div className="w-413 h-40  text-left pt-4 ">
          <span className="text-gray-800 text-6xl tracking-wide font-normal not-italic ">
            WAY KAMBAS MINI EBONY
          </span>
        </div>
        <div className="w-529 h-54  ml-28 text-justify mt-6 ">
          <span className="text-gray-800 tracking-wide font-normal not-italic text-base">
            MATOA Way Kambas Maple comes with a material form of Canadian Maple
          </span>
        </div>
        <div className="w-20 h-7  mr-96 ml-11 mt-6 ">
          <span className="text-gray-800 tracking-wide font-medium not-italic text-base">
            Discover
          </span>
        </div>
        <div className="flex mt-10 ml-20 items-center">
          <div className="px-6">
            <button className="w-8 h-8 bg-gray-300 mx-3">
              <RemoveIcon />
            </button>
            <span>01</span>
            <button className="w-8 h-8 bg-gray-800 text-white mx-3">
              <AddIcon />
            </button>
          </div>
          <div className="w-229 h-16 bg-gray-800 flex items-center pl-8">
            <CircleIcon className="text-gray-400" />
            <button className="text-white px-9 text-xl font-normal ">
              Add to cart
            </button>
          </div>
          <div className="h-16 w-36 bg-gray-800 flex items-center justify-center ml-8">
            <span className="text-white px-9 text-xl font-normal ">Cicil</span>
            <img src=""></img>
          </div>
        </div>
        <div className="flex px-6 mt-14  ml-1010 mr-48 ">
          <div className=" w-16 h-16 mx-2 border-solid border-2 border-black flex justify-center items-center">
            <ArrowBackIosNewIcon />
          </div>
          <div className=" w-16 h-16 mx-2 border-solid border-2 border-black flex justify-center items-center bg-gray-800">
            <ArrowForwardIosIcon className="text-white" />
          </div>
        </div>
      </div>
      <div className="w-316 h-520 bg-black flex justify-center items-center absolute left-16 top-14 ">
        <span className="text-white"> Photo</span>
        <img src=""></img>
      </div>
    </div>
  );
};

export default Carousel;
