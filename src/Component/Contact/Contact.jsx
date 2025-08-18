import React from "react";
import { Play } from "lucide-react"; // or any other icon
import image from "../../assets/Contact/contact_header.jpg"
import Contact_form from  "../Contact/Contact_form"

const ContactSection = () => {
    return (
        <>
        <div className="relative w-full flex items-center justify-center text-center px-6 md:px-12 lg:px-20">
            <div className="relative  w-full h-[80vh] flex items-center justify-center text-center mt-24 mb-10">
                {/* Background Image */}
                <img
                    src={image}
                    alt="Contact Background"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>

                {/* Text Content */}
                <div className="relative z-10 text-white max-w-2xl px-6">
                    <p className="text-[80px] font-bold mb-2">Contact Us</p>
                    <p className="text-[15px] leading-relaxed font-medium">
                        We’d love to hear from you! Whether you have a question, feedback, or just <br /> 
                        want to say hello, feel free to reach out. Use the form below or contact us <br />
                        directly via phone or email. We’ll get back to you as soon 
                        as possible.
                    </p>
                </div>

                {/* Floating Play Button */}
                <button className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg hover:bg-yellow-500 transition">
                    <Play className="text-black w-6 h-6" />
                </button>
            </div>
        </div>
        
        {/* contact_from */}
         <Contact_form/>
        </>
    );
};

export default ContactSection;
