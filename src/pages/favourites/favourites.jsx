import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { removeFromFavourites } from "../../components/products/store/favoritesSlice";
import { addToCart } from "../../components/products/store/cartSlice";

function Favourites() {
  const { favourites } = useSelector(state => state)

  const dispatch = useDispatch();

  function handleRemoveFromFavourites(itemId) {
    dispatch(removeFromFavourites(itemId))
  }

  function handleAddToCart(item) {
    dispatch(addToCart(item))
  }


  const handleProductClick = () => {
    window.scrollTo(0, 0);
  };


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
    <div className="min-h-screen bg-blue-950">

      {
        favourites.length ?
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 py-40 px-6 lg:px-36">
          {

          favourites.map(item => <div key={item.id}
            className="item-card flex flex-col gap-3 bg-white shadow-md shadow-black justify-center px-6 rounded-2xl py-3">
            <Link to={`/details/${item.id}`} onClick={handleProductClick}>
              <img src={item.image} alt={item.title} className="lg:h-[150px] lg:w-[150px] object-cover rounded-2xl mx-auto" />
              <h3 className="text-cyan-700 hover:underline">{item.title}</h3>
            </Link>
            <div className="flex">
              {generateStars(item.rating)}
            </div>
            <p>
              {item.description.length > 100 ? item.description.slice(0, 100) : item.description}
              {item.description.length > 100 && <span className="text-blue-600 font-bold text-4xl ml-1">
                <Link to={`/details/${item.id}`} onClick={handleProductClick} className="text-blue-600 font-bold text-4xl">...</Link>
              </span>}
            </p>
            <p>
              {item.featured && <span className="font-normal line-through mr-12">&#8358;{item.price + (item.price * 0.45)}</span>}
              <span>&#8358;{item.price}</span>
            </p>

            <div className="buttons">
              <button onClick={() => handleAddToCart(item)} className="uppercase">Add To Cart</button>
              <button onClick={() => handleRemoveFromFavourites(item.id)} className="uppercase ml-6">Remove</button>
            </div>
          </div>)
}
</div>

          :
          <div className="flex flex-col min-h-[80vh] items-center justify-center gap-12 text-white">
            <h1 className="px-4 lg:w-2/3 text-center">You have not added any item to your Favourites</h1>
            <Link to={'/menu'} className="text-3xl text-[#d89423]">Go To Menu</Link>
          </div>
      }

    </div>
  );
}

export default Favourites;
