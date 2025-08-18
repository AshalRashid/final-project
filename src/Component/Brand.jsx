import React from "react";
import logitech from "../assets/Images/Logitech.png"
import marshall from "../assets/Images/marshall.png"
import sony from "../assets/Images/Sony.png"
import bose from "../assets/Images/Bose.png"
import yamaha from "../assets/Images/yamaha.jpg"
import smasung from "../assets/Images/Samsung.jpg"
import apleWatch from "../assets/Images/Watch.jpg"


const BrandSection = () => {
  return (
    <div className="w-full flex flex-col items-center mt-6">
      

      {/* Brand Logos */}
      <div className="flex flex-wrap justify-center items-center gap-10">
        <img src={logitech} alt="Logitech" className="h-28 object-contain"  />
        <img src={marshall} alt="Marshall" className="h-22 object-contain" />
        <img src={sony} alt="Sony" className="h-22 object-contain" />
        <img src={bose} alt="Bose" className="h-22 object-contain" />
        <img src={yamaha} alt="Yamaha" className="h-15 object-contain" />
        <img src={smasung} alt="Samsung" className="h-15 object-contain" />
        <img src={apleWatch} alt="Apple Watch" className="h-24 object-contain" />
      </div>
    </div>
  );
};

export default BrandSection;
