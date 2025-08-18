import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <p className="text-[22px] font-bold mb-2">NEOTEK</p>
          <p className="text-white text-sm mb-4">
            Whether you’re a trendsetter, a minimalist, or an adventurer at heart,
            Neotek has something for everyone. Our diverse range of styles caters
            to various personas.
          </p>
          <div className="flex space-x-3">
            <a href="#"  className="w-9 h-9 flex items-center justify-center bg-gray-800  rounded-full hover:bg-yellow-400 hover:text-black transition">
              <FaFacebookF size={14}  className="text-white" />
            </a>
            <a href="#"  className="w-9 h-9 flex items-center justify-center bg-gray-800  rounded-full hover:bg-yellow-400 hover:text-black transition">
              <FaTwitter size={14}  className="text-white" />
            </a>
            <a href="#"  className="w-9 h-9 flex items-center justify-center bg-gray-800  rounded-full hover:bg-yellow-400 hover:text-black transition">
              <FaInstagram size={14}  className="text-white" />
            </a>
            <a href="#"  className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-black transition">
              <FaPinterestP size={14}  className="text-white" />
            </a>
          </div>
        </div>

        {/* Customer Support */}
        <div>
          <p className="text-[20px] ml-7 font-semibold mb-2">Customer Support</p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-yellow-400 text-white" style={{ textDecoration: 'none' }} >Our Story</a></li>
            <li><a href="#" className="hover:text-yellow-400 text-white" style={{ textDecoration: 'none' }}>Mission & Values</a></li>
            <li><a href="#" className="hover:text-yellow-400 text-white" style={{ textDecoration: 'none' }}>Meet the Team</a></li>
            <li><a href="#" className="hover:text-yellow-400 text-white" style={{ textDecoration: 'none' }}>Sustainability Efforts</a></li>
            <li><a href="#" className="hover:text-yellow-400 text-white" style={{ textDecoration: 'none' }}>Brand Partnerships</a></li>
            <li><a href="#" className="hover:text-yellow-400 text-white" style={{ textDecoration: 'none' }}>Influencer Collaborations</a></li>
          </ul>
        </div>

        {/* Accessibility */}
        <div>
          <p className="text-[20px] ml-7 font-semibold mb-2">Accessibility</p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-yellow-400 text-white" style={{ textDecoration: 'none' }}>Accessibility Statement</a></li>
            <li><a href="#" className="hover:text-yellow-400 text-white" style={{ textDecoration: 'none' }}>Site Map</a></li>
            <li><a href="#" className="hover:text-yellow-400 text-white" style={{ textDecoration: 'none' }}>Web Accessibility Options</a></li>
            <li><a href="#" className="hover:text-yellow-400 text-white" style={{ textDecoration: 'none' }}>ADA Compliance</a></li>
            <li><a href="#" className="hover:text-yellow-400 text-white" style={{ textDecoration: 'none' }}>Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400 text-white" style={{ textDecoration: 'none' }}>Terms of Service</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <p className="text-[20px] font-semibold mb-4">Let’s get in touch</p>
          <p className="text-white text-sm mb-4">
            Sign up to get first dibs on new arrivals, sales, exclusive content,
            events and more!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="w-full px-4 py-2 rounded-l-md focus:outline-none text-black bg-white"
            />
            <button className="px-4 bg-white text-black rounded-r-md hover:bg-yellow-300 transition">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>© 2025 Neotek All rights reserved. Designed by Novaworks</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <img src="/images/amazon.png" alt="Amazon" className="h-6" />
            <img src="/images/amex.png" alt="Amex" className="h-6" />
            <img src="/images/paypal.png" alt="PayPal" className="h-6" />
            <img src="/images/cod.png" alt="Cash on Delivery" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
