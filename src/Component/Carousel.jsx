import image1 from '../assets/Images/Headphone1.jpg';
import image2 from '../assets/Images/Headphone2.jpg';
import image3 from '../assets/Images/Headphone3.jpg';


export default function Carousel () {
    

    return(
        <div className="Slider">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {/* Slide 1 */}
                        <div className="carousel-item active relative" data-bs-interval="10000">
                            <img src={image1} className="d-block w-100 h-[700px] object-cover" alt="..." />
                            <div className="absolute  inset-0 flex flex-col items-start justify-center lg:px-56 sm:px-35 md:px-45">
                                <h1 className="text-white  text-4xl md:text-4xl lg:text-6xl sm:tet-3xl font-semibold max-w-lg leading-tight">
                                    The Headphone <br />
                                    Collection That <br />
                                    Defines Excellence <br />
                                </h1>
                                <br />
                                <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black  py-2 px-3 text-[12px]! rounded-4xl! shadow-lg">
                                    Available now for $99
                                </button>
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="carousel-item" data-bs-interval="1000">
                            <img src={image2} className="d-block w-100 h-[700px] object-cover" alt="..." />
                            <div className="absolute inset-0 flex flex-col items-start justify-center lg:px-56 sm:px-35 md:px-45">
                                <h1 className="text-white text-4xl md:text-5xl font-semibold max-w-lg leading-tight">
                                    The Headphone <br />
                                    Collection That <br />
                                    Defines Excellence <br />
                                </h1>
                                <br />
                                <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-3 text-[12px]! rounded-4xl! shadow-lg">
                                    Available now for $99
                                </button>
                            </div>
                        </div>

                        {/* Slide 3 */}
                        <div className="carousel-item">
                            <img src={image3} className="d-block w-100 h-[700px] object-cover" alt="..." />
                            <div className="absolute inset-0 flex flex-col items-start justify-center lg:px-46 sm:px-5 md:px-45">
                                <h1 className="text-white text-4xl md:text-5xl font-semibold max-w-lg leading-tight">
                                    The Headphone <br />
                                    Collection That <br />
                                    Defines Excellence <br />
                                </h1>
                                <br />
                                <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black  py-2 px-3 text-[12px]! rounded-4xl! shadow-lg">
                                    Available now for $99
                                </button>
                            </div>
                        </div>

                        {/* Controls */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
    )
}