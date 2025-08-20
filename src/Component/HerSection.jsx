import React from "react";
import HerSectionimg from "../assets/Images/HeroSection.jpg";

const HeroSection = () => {
  return (
    <section className="
      mt-2
      relative h-150 sm:h-[28rem] md:h-[40rem] 
      bg-black flex items-center justify-center 
      mx-14 sm:mx-8 md:mx-36 lg:mx-38 
      rounded-2xl
    ">
      {/* Background Image */}
      <img
        src={HerSectionimg}
        alt="Headphones"
        className="absolute inset-0 w-full h-full object-cover rounded-[2rem] rounded-br-[6rem]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 rounded-[2rem]"></div>

      {/* Content */}
      <div className="relative text-center max-w-3xl md:mr-35 md:max-w-5xl px-6">
        <h1 className="text-white text-3xl sm:text-4xl  md:text-[36px] font-sans mb-6">
          Introducing the New <br /> Standard in Sound
        </h1>
        <p className="text-white/80 mb-10 leading-relaxed text-sm sm:text-base font-bold font-sans">
          Step into the future of audio with the all-new Headphone for 2025 – 
          where <br /> cutting-edge technology meets bold design. Crafted for the modern <br />
          listener, this next-gen headphone delivers immersive sound, intelligent <br />
          noise cancellation.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
