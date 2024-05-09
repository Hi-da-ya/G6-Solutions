import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [quote, setQuote] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const fetchQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            setQuote(data.content);
        } catch (error) {
            console.error('Failed to fetch quote:', error);
        }
    };

    const toggleModal = () => {
        if (!isModalOpen) {
            fetchQuote();
        }
        setIsModalOpen(!isModalOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-blue-500 shadow-md text-white fixed top-0 w-full z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <img src="https://gritplay.netlify.app/assets/images/logop.png" alt="G6 Solutions Logo" className="mr-3 h-8" />
                    <span className="text-xl font-semibold">G6 Solutions</span>
                </Link>
                <div className="md:hidden">
                    <button aria-label="Toggle Menu" onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2z" />
                        </svg>
                    </button>
                </div>
                <div className={`${isMenuOpen ? 'flex' : 'hidden'} fixed inset-0 bg-blue-800 bg-opacity-95 z-50 flex-col items-center justify-center md:hidden`}>
                    <button aria-label="Close Menu" onClick={toggleMenu} className="absolute top-4 right-4">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z" />
                        </svg>
                    </button>
                    <Link className="text-white text-lg py-2" to="/" onClick={toggleMenu}>Home</Link>
                    <Link className="text-white text-lg py-2" to="/about" onClick={toggleMenu}>About Us</Link>
                    <Link className="text-white text-lg py-2" to="/services" onClick={toggleMenu}>Services</Link>
                    <Link className="text-white text-lg py-2" to="/projects" onClick={toggleMenu}>Projects</Link>
                    <Link className="text-white text-lg py-2" to="/contact" onClick={toggleMenu}>Contact Us</Link>
                    <Link className="text-white text-lg py-2" to="/quiz"  onClick={toggleMenu}>Quiz</Link>
                   
                    <button onClick={toggleModal} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                        Get a Quote
                    </button>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link className="text-white text-lg py-2" to="/">Home</Link>
                    <Link className="text-white text-lg py-2" to="/about">About Us</Link>
                    <Link className="text-white text-lg py-2" to="/services">Services</Link>
                    <Link className="text-white text-lg py-2" to="/projects">Projects</Link>
                    <Link className="text-white text-lg py-2" to="/contact">Contact Us</Link>
                    <button onClick={toggleModal} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Get a Quote
                    </button>
                </div>
            </nav>
            
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full mx-4">
                        <h2 className="text-xl font-semibold mb-4">Your Quote:</h2>
                        <p className="text-gray-800">{quote}</p>
                        <button onClick={toggleModal} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
