import { FaTimes } from "react-icons/fa";
import './styles.css'

function Sidebar({ query, handleSearchChange, handlePriceInput, priceFilterButtonClick, isMobile, setPriceFilterButtonClick }) {

    const priceRange = [
        {
            minValue: 0,
            maxValue: 500
        },
        {
            minValue: 500,
            maxValue: 1000
        },
        {
            minValue: 1000,
            maxValue: 1500
        },
        {
            minValue: 1500,
            maxValue: 2000
        },
        {
            minValue: 2000,
            maxValue: 2500
        },
        {
            minValue: 2500,
            maxValue: 3000
        },
        {
            minValue: 3000,
            maxValue: 3500
        },
        {
            minValue: 3500,
            maxValue: 4000
        },
    ];


    return (
        <div className="flex flex-col lg:px-8">
            <div className={`relative pt-8 pb-20`}>
                <input
                    type="text"
                    name="search"
                    onChange={handleSearchChange}
                    value={query}
                    placeholder="Search..."
                    className="px-4 py-5 w-full text-4xl rounded-2xl outline-none"
                />

            </div>

            <div className={`price-filter-btn-container ${priceFilterButtonClick && 'show-price-filter-btn-container'}`}>
                <FaTimes
                onClick={()=> setPriceFilterButtonClick(false)} 
                className="absolute top-16 right-16 text-5xl text-orange-800 lg:hidden" />
                <label htmlFor="" className="input-container text-3xl mb-6 text-white lg:text-gray-400">
                    <input
                        type="radio"
                        name="price"
                        className="mr-3"
                        onChange={() => handlePriceInput({ minValue: 0, maxValue: 0 })}
                    />
                    All
                </label>

                {priceRange.map((range, index) => (
                    <label key={index} htmlFor={`price${index}`} className="input-container text-3xl mb-6 text-white lg:text-gray-700">
                        <input
                            type="radio"
                            name={`price`}
                            id={`price${index}`}
                            onChange={() => handlePriceInput(range)}
                            className="mr-3"
                        />
                        &#8358;{range.minValue} - &#8358;{range.maxValue}
                    </label>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
