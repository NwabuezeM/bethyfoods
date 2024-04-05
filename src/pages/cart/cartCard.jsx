import { FaTrash } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { decrementQuantity, incrementQuantity } from "../../components/products/store/cartSlice"


function CartCard({ item, handleRemoveFromCart }) {
    const dispatch = useDispatch()

    function handleItemIncrement() {
        dispatch(incrementQuantity(item.id))
    }

    function handleItemDecrement() {
        dispatch(decrementQuantity(item.id))
    }
    return (
        <div key={item.id}>
            <div className="information flex justify-between items-center text-gray-700">
                <div className="flex gap-3 items-center">
                    <img src={item.image} alt={item.title} className="item-image w-[50px] h-[50px] md:w-[80px] md:h-[80px] lg:h-[80px] lg:w-[80px] object-cover rounded-lg" />
                    <p className="font-bold">{item.title}</p>
                </div>
                <div className="flex items-center">
                    <button className="bg-transparent hover:bg-transparent text-5xl text-blue-800" onClick={handleItemDecrement}>-</button>
                    <p className="border border-slate-400 rounded-md py-2 px-4 lg:px-6">{item.quantity}</p>
                    <button className="bg-transparent hover:bg-transparent text-5xl text-blue-800" onClick={handleItemIncrement}>+</button>
                </div>
                <div className="flex"><p>&#8358;{item.price}</p>
                    <button className="bg-transparent hover:bg-transparent text-gray-700" onClick={() => handleRemoveFromCart(item.id)}><FaTrash /></button></div>
            </div>
            <div className="divider border-b border-b-gray-600 w-full mx-auto my-12"></div>
        </div>
    )
}

export default CartCard