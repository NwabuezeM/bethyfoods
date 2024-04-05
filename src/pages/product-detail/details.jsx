import React from "react";
import { useParams } from "react-router-dom";
import productData from '../../components/products/products.json';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa'
import ProductCard from "../../components/products/productCard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../components/products/store/cartSlice";
import { addToFavourites } from "../../components/products/store/favoritesSlice";

function ProductDetails() {

  const dispatch = useDispatch()
  const { id } = useParams();
  const selectedProduct = productData.find(product => product.id === parseInt(id));
  const { image, title, category, rating, price, description, featured } = selectedProduct;

  const similarProducts = productData.filter(product => product.category === category);

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

  function handleAddToCart() {
    dispatch(addToCart(selectedProduct))
  }

  function handleAddToFavourite() {
    dispatch(addToFavourites(selectedProduct))
  }

  if (!selectedProduct) {
    return <div>No product found for ID: {id}</div>;
  }

  useEffect(()=> {
    document.title = title;
  }, [title]);

  return (
    <div>
    <div className="bg-[#050524] text-white px-8 w-full">
      <div className="grid lg:grid-cols-2 gap-12 px-8 lg:px-36 pb-36 pt-44 items-center justify-center min-h-[70vh]">
        <div className="image">
          <img src={image} alt={title} className="rounded-2xl lg:min-h-[100%]" />
        </div>
        <div className="information flex flex-col gap-8">
          <h3>{title}</h3>
          <div className="flex">
            {generateStars(rating)}
          </div>
          <p>
            {
              featured && <span className="font-normal line-through mr-12">&#8358;{price + (price * 0.45)}</span>
            }
            <span>&#8358;{price}</span>
          </p>
          <div className="buttons flex gap-8">
            <button onClick={handleAddToCart} className="bg-green-600 py-6 flex uppercase"><FaShoppingCart size={18} className="mr-8" /><span>Add To Cart</span></button>
            <button className="py-6 flex uppercase" onClick={handleAddToFavourite}><FaHeart size={18} className="mr-8" /><span>Add To Favourites</span></button>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
    <h2 className="text-center mt-36 mb-8">SIMILAR PRODUCTS</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-8 px-8 lg:px-36 mb-36">
      {
        similarProducts && similarProducts.map(product => <ProductCard product={product} />)
      }
    </div>
    </div>
  );
}

export default ProductDetails;
