import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function Home() {
    const [meals, setMeals] = useState([]);
    console.log(meals, 'Home component rendered');
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => setMeals(res.data.meals));
    }, []);

    return (
        <div className='max-w-7xl mx-auto px-4 py-8'>
            <div className='mb-8'>
                <h2 className='text-3xl font-bold text-gray-800 mb-2'>Menu</h2>
                <p className='text-gray-600'>Discover our delicious meals</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded border border-red-100 p-4 '>
                {meals?.map(meal => (
                    <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300' key={meal.idMeal}>
                        <div className='relative'>
                            <img
                                src={meal.strMealThumb}
                                className="w-full h-48 object-cover"
                                alt={meal.strMeal}
                            />
                        </div>
                        <div className='p-4'>
                            <h5 className='text-lg font-semibold text-gray-800 mb-3 line-clamp-2'>{meal.strMeal}</h5>
                            <button
                                className='w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
                                onClick={() => dispatch(addToCart({ id: meal.idMeal, name: meal.strMeal }))}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Home;