import React from 'react';

function ProductFilter() {
    const categories = ['Soups', 'Rice', 'Pepper Soup', 'Snacks', 'Drinks', 'Others'];

    const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

    return (
        <div className='bg-gray-200 py-8 px-6 hidden md:block lg:block'>
            <h3>FILTER</h3>
            <div className="categories flex flex-col gap-4">
                {categories.map((category, index) => (
                    <label key={index} className='text-3xl'>
                        <input type="checkbox" name={category.toLowerCase()} id={category.toLowerCase()} className='mr-4 checked:bg-[#d89423] cursor-pointer' />
                        {category}
                    </label>
                ))}
            </div>
            <div className="price">
                <div className='my-8 flex justify-between'>
                    <p className='font-bold'>PRICE (&#8358;)</p>
                    <button>APPLY</button>
                </div>
                <div className='relative'>
                    <input
                        type="range"
                        min="20"
                        max="100"
                        value="50"
                        className="slider z-50 top-0 w-full -mt-1 bg-gray-400"
                    />
                </div>
                <div className="flex my-4 items-center gap-3">
                    <input type="number" name="start" id="start" className='p-4 text-2xl rounded-lg outline-none border border-gray-400 w-36' />
                    <span>-</span>
                    <input type="number" name="end" id="end" className='p-4 text-2xl rounded-lg outline-none border border-gray-400 w-36' />
                </div>
            </div>
            <div>
                <h3>BY NAME</h3>
                <select name="filter-by-name" id="filter-by-name" className='text-3xl cursor-pointer p-4 my-4 outline-none focus:border-2 focus:border-green-700 rounded-2xl'>
                    <option value="" disabled selected>Choose letter</option>
                    {letters.map(letter => (
                        <option key={letter} value={letter} className='hover:bg-[#d89423] rounded-lg'>{letter}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default ProductFilter;
