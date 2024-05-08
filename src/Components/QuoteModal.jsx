// Components/QuoteModal.js
import React from 'react';

const QuoteModal = ({ quote, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm">
        <h2 className="text-xl font-bold">Random Quote</h2>
        <p className="italic">"{quote.content}"</p>
        <p className="text-right">- {quote.author}</p>
        <button onClick={onClose} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Close
        </button>
        
      </div>
    </div>
  );
};

export default QuoteModal;
