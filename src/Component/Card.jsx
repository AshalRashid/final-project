import React from "react";
import { ArrowRight } from "lucide-react";

const Card = ({ image, productCount, title }) => {
  return (
    <div className="relative w-full mx-3 h-full group overflow-hidden  rounded">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded group-hover:scale-105 transition-transform duration-300"
      />

      {/* Product Count Badge */}
      <div className="absolute top-4 mx-3 bg-yellow-400 text-black font-semibold  rounded">
        <div className="left-4  bg-yellow-400 text-black font-semibold text-sm px-3  py-1 rounded">
          {productCount} Products <br />
        </div>
        <div className="left-2  bg-yellow-400  text-black font-semibold text-sm px-3 py-1 rounded">
          {title}
        </div>
      </div>

      {/* Circular Button */}
      <button
        className="absolute bottom-2 mt-2 right-4 flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 transition  !rounded-full "
        style={{ width: "45px", height: "45px", zIndex: 10 }}
      >
        <ArrowRight size={21} />
      </button>
    </div>
  );
};

export default Card;
