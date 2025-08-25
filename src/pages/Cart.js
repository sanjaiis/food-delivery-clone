import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQty, decrementQty } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

function Cart() {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

    return (
        <div className="max-w-3xl mx-auto p-4 mt-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">🛒 Your Cart</h2>

                {cart.length === 0 ? (
                    <p className="text-gray-500">No items in cart.</p>
                ) : (
                    <>
                        <ul className="space-y-4 mb-6">
                            {cart.map(item => (
                                <li
                                    key={item.id}
                                    className="flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow-sm"
                                >
                                    <div>
                                        <p className="font-medium text-lg">{item.name}</p>
                                        <p className="text-sm text-gray-500">Quantity: {item.qty}</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => dispatch(incrementQty(item.id))}
                                            className="px-3 py-1 text-sm bg-green-500 hover:bg-green-600 text-white rounded-lg"
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() => dispatch(decrementQty(item.id))}
                                            className="px-3 py-1 text-sm bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg"
                                        >
                                            -
                                        </button>
                                        <button
                                            onClick={() => dispatch(removeFromCart(item.id))}
                                            className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="flex justify-between items-center mb-4">
                            <p className="text-lg font-medium">Total Items: {totalItems}</p>
                            {/* Add total price here if needed */}
                        </div>

                        <Link
                            to="/checkout"
                            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold"
                        >
                            Proceed to Checkout
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;
