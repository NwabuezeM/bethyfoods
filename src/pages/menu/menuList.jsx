import React, { useState, useEffect } from "react";
import productData from '../../components/products/products.json';
import ProductCard from "../../components/products/productCard";
import Sidebar from "./sidebar";
import { FaTimes } from "react-icons/fa";

function MenuList() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [query, setQuery] = useState("");
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [productsToShow, setProductsToShow] = useState([]);
    const [filterButtonClicked, setFilterButtonClicked] = useState(false);
    const [priceFilterButtonClick, setPriceFilterButtonClick] = useState(false);
    const [isMobile, setIsMobile] = useState(false);


    function handleSearchChange(e) {
        setQuery(e.target.value);
    }

    function handlePriceInput(range) {
        setMinValue(range.minValue);
        setMaxValue(range.maxValue);
        setPriceFilterButtonClick(false)
    }

    function categoryButtonClick(category) {
        setFilterButtonClicked(false)
        setSelectedCategory(category.category)
        console.log('clicked');
    }

    // Filter products based on search query
    const searchFilter = productData.filter(product => product.title.toLowerCase().includes(query.toLowerCase())
        || product.description.toLowerCase().includes(query.toLowerCase())
        || product.category.toLowerCase().includes(query.toLowerCase())
    );

    // Filter products based on selected category
    const categoryFilter = productData.filter(product => selectedCategory === 'all' || product.category === selectedCategory);

    //Filter products by price
    const priceFilter = productData.filter(product => product.price >= minValue && product.price <= maxValue);

    // Function to update products to show based on search and category filters
    function updateProductsToShow() {
        if (query.trim() !== '') {
            setProductsToShow(searchFilter);

        } else if (priceFilter.length > 0) {
            setProductsToShow(priceFilter)
        } else {
            setProductsToShow(categoryFilter)
        }
    }

    // Update products to show when search query or selected category changes
    useEffect(() => {
        updateProductsToShow();
    }, [query, selectedCategory, minValue, maxValue]);

    //Handle media query
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        setIsMobile(mediaQuery.matches);
        const handleResize = () => {
            setIsMobile(mediaQuery.matches);
        };
        mediaQuery.addEventListener('change', handleResize);
        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        };
    }, []);
    // Array of categories
    const categories = [
        { label: "All", category: "all" },
        { label: "Soups", category: "soup" },
        { label: "Rice", category: "rice" },
        { label: "Pepper Soup", category: "pepper soup" },
        { label: "Snacks", category: "snacks" },
        { label: "Drinks", category: "drinks" },
        { label: "Others", category: "others" }
    ];


    return (
        <>
            <div className="menu-container">
                <div className='bg-gray-200 rounded-2xl'>
                    <Sidebar
                        query={query}
                        handleSearchChange={handleSearchChange}
                        handlePriceInput={handlePriceInput}
                        priceFilterButtonClick={priceFilterButtonClick}
                        isMobile={isMobile}
                        setPriceFilterButtonClick={setPriceFilterButtonClick}
                    />
                </div>
                <div>
                    <div>
                        <div className={`flex justify-evenly bg-gray-200 ${!isMobile && 'hidden'}`}>
                            <button onClick={() => setFilterButtonClicked(true)}
                                className="py-5 mr-8">Select Category</button>
                            <button onClick={() => setPriceFilterButtonClick(true)}
                                className="py-5 ml-8">Filter By Price</button>
                        </div>
                        <div className={`category-btn-container ${filterButtonClicked && 'show-category-btn-container'}`}>
                            <FaTimes
                                onClick={() => setFilterButtonClicked(false)}
                                className="absolute top-16 right-14 text-5xl text-orange-800 lg:hidden" />
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => categoryButtonClick(category)}
                                    className={`category-btn ${selectedCategory === category.category && 'category-btn-clicked'}`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 pt-12 pb-16">
                        {productsToShow.map(item => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>
                    {
                        productsToShow.length === 0 && <div className="flex mt-40 justify-center">
                            <h2>NO RESULT FOUND</h2>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default MenuList;
