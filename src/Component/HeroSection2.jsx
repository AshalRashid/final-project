import image from '../assets/Images/HeroSection2.jpg'

export default function HeroSection2() {
    return (
        <>
            <section className="relative h-150 sm:h-[28rem] md:h-[40rem] 
            bg-black flex items-center justify-center 
            mx-14 sm:mx-8 md:mx-36 lg:mx-38 
            rounded-2xl">
                {/* Background Image */}
                <img
                    src={image}
                    alt="Headphones"
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                />

                {/* Overlay */}
                <div className="absolute inset-0  rounded-[2rem]"></div>

                {/* Content */}
                <div className="relative text-center  md:mr-100 max-w-3xl px-6">
                    <h1 className="text-white text-4xl md:text-[45px] font-sans mb-6">
                        Unleash Your True Voice
                    </h1>
                    <p className="text-white mb-10 leading-relaxed text-[16px] font-bold font-sans">
                        Engineered for creators, professionals, and performers alike, this <br />
                        microphone delivers studio-grade clarity with intelligent noise isolation <br />
                        and adaptive voice capture.
                    </p>
                    <div className="btn">
                        <button className="px-4 py-2 bg-amber-400">Discover Now</button>
                    </div>
                </div>
            </section>
        </>
    )
}