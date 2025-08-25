import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const cartCount = useSelector(state => state.cart.items.length);
    return (
        <nav className='bg-gray-800 text-white px-4 py-3 flex justify-between items-center'>
            <Link className='text-xl font-bold hover:text-gray-300' to='/'>Food Delivery</Link>
            <div>
                <Link className='hover:text-gray-300 transition-colors' to='/cart'>
                    Cart ({cartCount})
                </Link>
            </div>
        </nav>
    );
}
export default Navbar;