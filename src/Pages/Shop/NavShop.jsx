import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline, IoBagOutline } from "react-icons/io5";
import { IoMdHeartHalf } from "react-icons/io";

export default function NavbarShop() {
    const [open, setOpen] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    // const [scrolledmobile, setScrolledMobile] = useState(false);

    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => setOpen(false), 6000);
            return () => clearTimeout(timer);
        }
    }, [open]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="Navbar relative z-50">
            {/* Top Alert */}
            {open && (
                <div className="fixed top-0 left-0 w-full bg-yellow-400 text-center h-10 pt-2 font-medium z-50">
                    Free shopping for all orders over $100+
                </div>
            )}

            {/* Navbar */}
            <nav
                className={`
    fixed left-0 w-full z-40 flex items-center justify-between px-6 py-4 transition-all duration-300
    ${open ? 'top-5' : 'top-0'}
    ${scrolled ? 'bg-white text-white shadow-none' : 'bg-white text-black '}
  `}
            >

                {/* Left Links */}
                <div className="flex items-center gap-10">
                    <ul className=" hidden md:flex gap-10 pt-1.5 text-gray-700 font-medium text-[12px]">
                        <li><Link to="/" className={`text-black hover:text-black no-underline hover:no-underline focus:no-underline hover:text-[12px]
                            ${scrolled ? 'text-black' : 'text-black'} `}
                            style={{ textDecoration: 'none' }}>Home</Link></li>
                        <li><Link to="/shop" className={`text-black hover:text-black no-underline hover:no-underline focus:no-underline hover:text-[12px]
                            ${scrolled ? 'text-black' : 'text-black'}`}
                            style={{ textDecoration: 'none' }}>Shop</Link></li>
                        <li><Link to="/pages" className={`text-black hover:text-black no-underline hover:no-underline focus:no-underline hover:text-[12px]
                            ${scrolled ? 'text-black' : 'text-black'}`}
                            style={{ textDecoration: 'none' }}>Pages</Link></li>
                        <li><Link to="/blog" className={`text-black hover:text-black no-underline hover:no-underline focus:no-underline hover:text-[12px]
                            ${scrolled ? 'text-black' : 'text-black'}`}
                            style={{ textDecoration: 'none' }}>Blog</Link></li>
                        <li><Link to="/contact" className={`text-black hover:text-black no-underline hover:no-underline focus:no-underline hover:text-[12px]                                          
                            ${scrolled ? 'text-black' : 'text-black'}                        
                            `}
                            style={{ textDecoration: 'none' }}>Contact Us</Link></li>
                    </ul>

                    {/* Logo */}
                    <li className="list-none">
                        <Link
                            to="/"
                            className={`text-2xl text-center ml-0 md:ml-40 font-bold tracking-wide 
                                 hover:text-black no-underline hover:no-underline focus:no-underline 
                                 md:text-white ${scrolled ? 'text-black' : 'text-black'}`}
                            style={{ textDecoration: 'none' }}
                        >
                            NEOTEK
                        </Link>
                    </li>


                </div>

                {/* Right Icons */}
                <div className="flex items-center gap-6 text-2xl">
                    {/* Search (button) */}
                    <button className={`${scrolled ? 'lg:text-black' : 'lg:text-black text-black'} md:text-black`}>
                        <CiSearch />
                    </button>


                    <Link to="/contact" className={`${scrolled ? 'text-black' : 'md:text-black text-black'} sm:text-black`}>
                        <IoPersonOutline />
                    </Link>

                    <button className={`${scrolled ? 'text-black' : 'md:text-black text-black'} sm:text-black`}>
                        <IoMdHeartHalf />
                    </button>

                    <Link to="/shop" className={`${scrolled ? 'text-black' : 'md:text-black text-black'} sm:text-black`}>
                        <IoBagOutline />
                    </Link>
                </div>
            </nav>
        </div>
    );
}
