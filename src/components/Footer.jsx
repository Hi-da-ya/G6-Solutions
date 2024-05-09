import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            {/* Mobile Footer: Shown on small screens, hidden on md and larger */}
            <footer className="bg-gray-800 text-white fixed inset-x-0 bottom-0 z-50 md:hidden">
                <div className="flex justify-around items-center p-4">
                    <Link to="/" className="flex flex-col items-center hover:text-gray-300">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-7-7v18" />
                        </svg>
                        <span className="text-xs mt-2">Home</span>
                    </Link>
                    <Link to="/about" className="flex flex-col items-center hover:text-gray-300">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.66 0 3-1.34 3-3S13.66 2 12 2 9 3.34 9 5s1.34 3 3 3zm0 2c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
                        </svg>
                        <span className="text-xs mt-2">About</span>
                    </Link>
                    <Link to="/services" className="flex flex-col items-center hover:text-gray-300">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-xs mt-2">Services</span>
                    </Link>
                    <Link to="/contact" className="flex flex-col items-center hover:text-gray-300">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10l-6-6H3v16h18V10zM4 8h8v4H4V8zm0 6h8v2H4v-2zm10 0h4v4h-4v-4z" />
                        </svg>
                        <span className="text-xs mt-2">Contact</span>
                    </Link>
                </div>
            </footer>

            {/* Laptop Footer: Hidden on small screens, shown on md and larger */}
            <footer className="hidden md:block bg-gray-800 text-white text-center p-4">
                <p>© 2024 G6 Solutions. All rights reserved.</p>
                <div className="flex justify-center mt-4">
                    <a href="#" className="text-white mx-2">Privacy</a>
                    <a href="#" className="text-white mx-2">Terms</a>
                    <a href="#" className="text-white mx-2">Sitemap</a>
                    <a href="#" className="text-white mx-2">Careers</a>
                </div>
            </footer>
        </>
    );
};

export default Footer;
