import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import './styles.css';
import { useDispatch } from "react-redux";
import { addToCart } from "./store/cartSlice";
import { addToFavourites } from "./store/favoritesSlice";


function ProductCard({ product, generateStars }) {

    const dispatch = useDispatch()

    const handleProductClick = () => {
        window.scrollTo(0, 0);
    };

    function handleAddToCart() {
        dispatch(addToCart(product))
    }

    function handleAddToFavourites() {
        dispatch(addToFavourites(product))
    }

    function generateStars(star) {
        let stars = [];
        for (let i = 0; i < 5; i++) {
          if (i < star) {
            stars.push(<FaStar key={`${i}-${star}`} className="text-gray-500" size={20} />);
          } else {
            stars.push(<FaStar key={`${i}-${star}`} className="text-yellow-500" size={20} />);
          }
        }
        return stars;
      }
    

    return (
        <div key={product.id} className="product-card flex flex-col gap-2 bg-white shadow-md shadow-black justify-center relative px-4 rounded-2xl py-3">
            <Link to={`/details/${product.id}`} onClick={handleProductClick}>
                <img src={product.image} alt={product.title}
                loading="lazy" 
                className="lg:h-[150px] lg:w-[150px] object-cover rounded-2xl mx-auto" />
                <h3 className="text-cyan-700 hover:underline">{product.title}</h3>

            </Link>
            <div className="flex">
                {generateStars(product.rating)}
            </div>
            <p>
                {product.description.length > 100 ? product.description.slice(0, 100) : product.description}
                {product.description.length > 100 && <span className="text-blue-600 font-bold text-4xl ml-1">
                    <Link to={`/details/${product.id}`} onClick={handleProductClick} className="text-blue-600 font-bold text-4xl">...</Link>
                </span>}
            </p>
            <p>
                {product.featured && <span className="font-normal line-through mr-12">&#8358;{product.price + (product.price * 0.45)}</span>}
                <span>&#8358;{product.price}</span>
            </p>
            <button className="absolute bg-transparent top-2 left-0 text-[#d89423] hover:bg-transparent hidden"
            onClick={handleAddToCart}><FaShoppingCart size={28} /></button>
            <button className="absolute bg-transparent top-2 right-0 text-[#d89423] hover:bg-transparent hidden"
            onClick={handleAddToFavourites}><FaHeart size={28} /></button>
        </div>
    );
}

export default ProductCard;
