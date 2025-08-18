import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Star } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import image1 from "../assets/Images/ProductImage.png";
import image2 from "../assets/Shop/Cardimage1.png";
import image3 from "../assets/Shop/Cardimage2.png";
import image4 from "../assets/Shop/Cardimage3.png";
import image5 from "../assets/Shop/Cardimage5.png";
import image6 from "../assets/Shop/Cardimage6.png";
import image7 from "../assets/Shop/Cardimage7.png";
import image8 from "../assets/Shop/Cardimage8.png";
import image9 from "../assets/Shop/Cardimage9.png";

const products = [
    {
        id: 1,
        name: "Ultimate over-ear headphones",
        price: 1549.0,
        rating: 5.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: image1,
    },
    {
        id: 2,
        name: "Premium over-ear headphones",
        price: 999.0,
        rating: 4.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: image2,
    },
    {
        id: 3,
        name: "Premium wireless earbuds",
        price: 399.0,
        rating: 5.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: image3,
    },
    {
        id: 4,
        name: "Comfortable do-it-all headphones",
        price: 599.0,
        rating: 4.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: image4,
    },
    {
        id: 5,
        name: "Comfortable do-it-all headphones",
        price: 599.0,
        rating: 4.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: image5,
    },
    {
        id: 6,
        name: "Comfortable do-it-all headphones",
        price: 599.0,
        rating: 4.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: image6,
    },
    {
        id: 7,
        name: "Comfortable do-it-all headphones",
        price: 599.0,
        rating: 4.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: image7,
    },
    {
        id: 8,
        name: "Comfortable do-it-all headphones",
        price: 599.0,
        rating: 4.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: image8,
    },
    {
        id: 9,
        name: "Comfortable do-it-all headphones",
        price: 599.0,
        rating: 4.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: image9,
    },
];

const Swiper_card = () => {
    return (
        <section className="px-20 py-5 mb-0">
            <h2 className="text-3xl font-bold mb-10">This week’s highlights</h2>

            {/* Swiper wrapper */}
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                className="w-full min-h-[300px] px-2"
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id} className="flex">
                        <div className="bg-gray-200 rounded-2xl pt-16 px-2 flex flex-col items-start text-left relative h-full">
                            {/* Product Image */}
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-52 object-contain mb-4"
                            />

                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-2">
                                <Star className="text-yellow-400 fill-yellow-400 w-4 h-4" />
                                <span className="text-sm font-semibold">
                                    {product.rating.toFixed(2)}
                                </span>
                                <span className="text-gray-500 text-sm">
                                    ({product.reviews} reviews)
                                </span>
                            </div>

                            {/* Category */}
                            <span className="uppercase text-gray-400 text-xs mb-1">
                                {product.category}
                            </span>

                            {/* Product Name */}
                            <p className="font-semibold text-gray-800 mb-4">
                                {product.name}
                            </p>

                            {/* Price */}
                            <div className="flex justify-between w-full">
                                <p className="font-bold text-gray-900">
                                    ${product.price.toLocaleString()}
                                </p>
                                <p className="">Add to cart</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Swiper_card;

