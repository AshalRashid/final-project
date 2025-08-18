import React from "react";
import { Star } from "lucide-react";
import image1 from "../assets/Images/ProductImage.png";
import image2 from '../assets/Shop/Cardimage1.png'
import image3 from '../assets/Shop/Cardimage2.png'
import image4 from '../assets/Shop/Cardimage3.png'

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
];

const ProductSection = () => {
  return (
    <section className="px-10 py-5 mb-0">
      <h2 className="text-3xl font-bold mb-10">This week’s highlights</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-200 rounded-2xl pt-5 pl-2 flex flex-col items-start text-left relative"
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
            <p className="font-semibold text-gray-800 mb-2">{product.name}</p>

            {/* Price (last element → no mb) */}
            <p className="font-bold text-gray-900">
              ${product.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;

