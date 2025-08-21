import React from "react";
import { Mail, Phone, Clock } from "lucide-react";

const ContactInfoForm = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Side - Contact Info */}
      <div className="space-y-10">
        {/* Client Care */}
        <div>
          <p className="text-xl font-semibold mb-2">Client Care</p>
          <div className="space-y-2 text-gray-700 text-[12px]">
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-4" /> mail@company.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-4" /> 8-888-888-8888 Ext. 1
            </p>
            <p className="flex items-center gap-2">
              <Clock className="w-5 h-4" /> Monday – Thursday: 9 AM – 7 PM ET,
              <br /> Friday: 9 AM – 2 PM ET
            </p>
          </div>
        </div>

        {/* Repair Service */}
        <div>
          <p className="text-xl font-semibold mb-2">Repair Service</p>
          <div className="space-y-2 text-gray-700 text-[12px]">
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-4" /> service@company.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-4" /> 8-888-888-8888 Ext. 3
            </p>
            <p className="flex items-center gap-2">
              <Clock className="w-5 h-4" /> Monday – Thursday: 9 AM – 7 PM ET,
              <br /> Friday: 9 AM – 2 PM ET
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 px-2 py-2 font-bold rounded focus:ring-2 focus:ring-yellow-400 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 px-2 py-2 font-bold rounded focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          className="w-full mb-4 border border-gray-300 px-4 py-3 font-bold rounded focus:ring-2 focus:ring-yellow-400 outline-none"
        />

        <textarea
          placeholder="Your message (optional)"
          rows="7"
          className="w-full border border-gray-300 px-4 py-3 rounded font-bold focus:ring-2 focus:ring-yellow-400 outline-none"
        ></textarea>

        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 transition text-black font-medium px-6 py-3 rounded shadow-md"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactInfoForm;
