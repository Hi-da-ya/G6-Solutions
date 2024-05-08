import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [quote, setQuote] = useState('');

    const fetchQuote = async () => {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        setQuote(data.content);
    };

    const openModal = () => {
        fetchQuote();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <header className="bg-blue shadow-md">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="flex items-center">
                    <img src="https://gritplay.netlify.app/assets/images/logop.png" alt="G6 Solutions Logo" className="mr-3 h-8" />
                    <span className="text-xl font-semibold">G6 Solutions</span>
                </a>
                <div className="flex items-center space-x-4">  
                    <Link className="text-blue px-2 py-1 hover:bg-gray-700" to="/">Home</Link>
                    <Link className="text-blue px-2 py-1 hover:bg-gray-700" to="/about">About Us</Link>
                    <Link className="text-blue px-2 py-1 hover:bg-gray-700" to="/services">Services</Link>
                    <Link className="text-blue px-2 py-1 hover:bg-gray-700" to="/projects">Projects</Link>
                    <Link className="text-blue px-2 py-1 hover:bg-gray-700" to="/contact">Contact Us</Link>
                    <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Get a Quote
                    </button>
                </div>
            </nav>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg">
                        <h2 className="text-lg">Your Quote:</h2>
                        <p>{quote}</p>
                        <button onClick={closeModal} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
