import React from 'react';
import { Link } from 'react-router-dom';

function Checkout() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
                <div className="text-green-500 text-6xl mb-4">
                    ✅
                </div>
                <h2 className="text-2xl font-bold mb-2">Thank you for your order!</h2>
                <p className="text-gray-600 mb-6">
                    This is a mock checkout page. Your delicious food is (not really) on the way 😋
                </p>
                <Link
                    to="/"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition"
                >
                    Go back to Home
                </Link>
            </div>
        </div>
    );
}

export default Checkout;
