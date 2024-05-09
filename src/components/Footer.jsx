import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white fixed bottom-0 w-full z-50">
            <div className="flex justify-around items-center p-4">
                {/* Navigation Links */}
                <Link to="/" className="text-center flex flex-col items-center">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-7-7v18" />
                    </svg>
                    <span className="text-xs">Home</span>
                </Link>
                <Link to="/about" className="text-center flex flex-col items-center">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.66 0 3-1.34 3-3S13.66 2 12 2 9 3.34 9 5s1.34 3 3 3zm0 2c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <span className="text-xs">About</span>
                </Link>
                <Link to="/services" className="text-center flex flex-col items-center">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-xs">Services</span>
                </Link>
                <Link to="/contact" className="text-center flex flex-col items-center">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10l-6-6H3v16h18V10zM4 8h8v4H4V8zm0 6h8v2H4v-2zm10 0h4v4h-4v-4z" />
                    </svg>
                    <span className="text-xs">Contact</span>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
