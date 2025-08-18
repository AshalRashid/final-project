import image1 from '../../assets/Shop/image1.jpg';
import item1 from '../../assets/Shop/item1.png'
import item2 from '../../assets/Shop/item2.png'
import { Star } from "lucide-react";
import { BaggageClaim } from 'lucide-react';

import Cardimg1 from '../../assets/Shop/Cardimage1.png'
import Cardimg2 from '../../assets/Shop/Cardimage2.png'
import Cardimg3 from '../../assets/Shop/Cardimage3.png'
import Cardimg4 from '../../assets/Shop/Cardimage4.png'
import Cardimg5 from '../../assets/Shop/Cardimage5.png'
import Cardimg6 from '../../assets/Shop/Cardimage6.png'
import Cardimg7 from '../../assets/Shop/Cardimage7.png'
import Cardimg8 from '../../assets/Shop/Cardimage8.png'
import Cardimg9 from '../../assets/Shop/Cardimage9.png'
import Cardimg10 from '../../assets/Shop/Cardimage10.png'
import Cardimg11 from '../../assets/Shop/Cardimage11.png'
import Cardimg12 from '../../assets/Shop/Cardimage12.png'
import Cardimg13 from '../../assets/Shop/Cardimage13.png'





const products = [
    {
        id: 1,
        name: "Ultimate over-ear headphones",
        price: 1549.0,
        rating: 5.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: Cardimg1,
    },
    {
        id: 2,
        name: "Premium over-ear headphones",
        price: 999.0,
        rating: 4.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: Cardimg2,
    },
    {
        id: 3,
        name: "Premium wireless earbuds",
        price: 399.0,
        rating: 5.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: Cardimg3,
    },
    {
        id: 4,
        name: "Comfortable do-it-all headphones",
        price: 599.0,
        rating: 4.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: Cardimg4,
    },
    {
        id: 5,
        name: "Ultimate over-ear headphones",
        price: 1549.0,
        rating: 5.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: Cardimg5,
    },
    {
        id: 6,
        name: "Ultimate over-ear headphones",
        price: 1549.0,
        rating: 5.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: Cardimg6,
    },
    {
        id: 7,
        name: "Ultimate over-ear headphones",
        price: 1549.0,
        rating: 5.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: Cardimg7,
    },
    {
        id: 7,
        name: "Ultimate over-ear headphones",
        price: 1549.0,
        rating: 5.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: Cardimg8,
    },
    {
        id: 8,
        name: "Ultimate over-ear headphones",
        price: 1549.0,
        rating: 5.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: Cardimg9,
    },
    {
        id: 9,
        name: "Ultimate over-ear headphones",
        price: 1549.0,
        rating: 5.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: Cardimg10,
    },
    {
        id: 11,
        name: "Ultimate over-ear headphones",
        price: 1549.0,
        rating: 5.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: Cardimg11,
    },
    {
        id: 12,
        name: "Ultimate over-ear headphones",
        price: 1549.0,
        rating: 5.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: Cardimg12,
    },
    {
        id: 13,
        name: "Ultimate over-ear headphones",
        price: 1549.0,
        rating: 5.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: Cardimg13,
    },
    {
        id: 14,
        name: "Ultimate over-ear headphones",
        price: 1549.0,
        rating: 5.0,
        reviews: 1,
        category: "ACCESSORIES",
        image: Cardimg3,
    },
];



const categories = [
    { name: "Keyboards", count: 12, img: item1 },
    { name: "Home Electronics", count: 8, img: item2 },
    { name: "Webcams", count: 10, img: item1 },
    { name: "Speakers", count: 12, img: item2 },
    { name: "Microphones", count: 8, img: item1 },
    { name: "Mice", count: 10, img: item2 },
    { name: "Lighting", count: 8, img: item1 },
];

export default function Shop() {



    return (
        <div className="w-full bg-white mt-25 text-black">
            {/* Top image */}
            <div className="relative w-full h-54 md:h-56 px-30  rounded-2xl overflow-hidden">
                <img
                    src={image1}
                    alt="Top Banner"
                    className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute left-45 top-1/2 transform -translate-y-1/2 text-black">
                    <span className=' text-3xl font-medium'>Shop</span> <br />
                    <span className='text-[14px]'>Home</span>  <span className='text-[10px] font-light'> / Shop</span>
                </div>
            </div>


            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="relative w-24 h-24 md:w-35 md:h-37 flex items-center justify-center bg-gray-100 rounded-full shadow-md">
                            <img
                                src={cat.img}
                                alt={cat.name}
                                className="w-16 h-16 object-contain"
                            />
                            <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow">
                                {cat.count}
                            </span>
                        </div>
                        <p className="mt-2 text-sm font-medium">{cat.name}</p>
                    </div>
                ))}
            </div>
            {/* Pagination UI (non-functional) */}
            <div className="flex justify-center mt-6 gap-2">
                <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Prev</button>
                <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">1</button>
                <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">2</button>
                <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">3</button>
                <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Next</button>
            </div>
            {/* All Product Card */}
            <section className="px-10 py-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-gray-200 rounded-2xl pt-5 pb-2 pl-2 flex flex-col items-start text-left relative"
                        >
                            {/* Product Image */}
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-80 h-52 object-contain mb-4"
                            />

                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-2">
                                <Star className="text-yellow-400 fill-yellow-400 w-4 h-4" />
                                <span className="text-sm font-semibold">{product.rating.toFixed(2)}</span>
                                <span className="text-gray-500 text-sm">
                                    ({product.reviews} reviews)
                                </span>
                            </div>

                            {/* Category */}
                            <span className="uppercase text-gray-400 text-xs mb-1">
                                {product.category}
                            </span>

                            {/* Product Name */}
                            <p className="font-semibold text-gray-800 mb-2 text-[14px]">{product.name}</p>

                            {/* Price */}
                            <div className="flex w-full justify-between items-center">
                                <p className="font-bold text-gray-900">
                                    ${product.price.toLocaleString()}
                                </p>
                                <span className="text-[12px] flex items-center gap-1 text-right pr-8">
                                    Add to Cart <BaggageClaim className='w-4 h-4' />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}