import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../components/products/store/cartSlice";
import CartCard from "./cartCard";
import CartSummary from "./cartSummary";
import './styles.css'
import { Link } from "react-router-dom";

function Cart() {
  
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();

  function handleRemoveFromCart(itemId) {
    dispatch(removeFromCart(itemId));
  }

  
  return (
    <div className="bg-blue-950 py-36 px-4 lg:px-52">
      {
        cart.length ? 
        <div className="cart-container text-gray-700 bg-white rounded-2xl">
        <div className="flex flex-col bg-white py-12 px-4 lg:px-36 rounded-tl-2xl rounded-bl-2xl">
          <h2 className="pb-12">Your Order Cart</h2>
          {cart.map(item => (
            <div key={item.id}>
              <CartCard item={item} handleRemoveFromCart={handleRemoveFromCart} />
            </div>
          ))}
        </div>
        <CartSummary cart={cart} />
      </div>
      :
      <div className="flex flex-col min-h-[80vh] items-center justify-center gap-12 text-white">
            <h1 className="px-4 lg:w-2/3 text-center">You do not have any item in the cart</h1>
            <Link to={'/menu'} className="text-3xl text-[#d89423]">Go To Menu</Link>
          </div>
      }
    </div>

  );
}

export default Cart;
