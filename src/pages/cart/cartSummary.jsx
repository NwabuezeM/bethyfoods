import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

function CartSummary({cart}) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [VATTotal, setVATTotal] = useState(0);

  useEffect(() => {
    if (cart && cart.length > 0) {
      const total = cart.reduce((currentTotal, currentValue) => currentTotal + (currentValue.price * currentValue.quantity), 0);
      const VAT = total * 0.075;
      const totalWithVAT = total +  VAT;

      setSubTotal(total);
      setVATTotal(VAT)
      setTotalPrice(totalWithVAT);
    } else {
      setTotalPrice(0);
    }
  }, [cart])

  return (
    <div className='bg-gray-200 px-4 py-12 lg:px-12 flex flex-col gap-4 lg:gap-12 rounded-tr-2xl rounded-br-2xl'>
        <h2>Summary</h2>
        <div className="divider border-b border-b-gray-600"></div>
        <p className="flex gap-8 lg:gap-14">
            <span>ITEMS: {cart.length}</span>
            <span>&#8358;{subTotal}</span>
        </p>
        <p className="flex gap-8 lg:gap-14"><span>VAT (7.5%):</span> <span>&#8358;{VATTotal}</span></p>
        <div className="divider border-b border-b-gray-600"></div>
        <p className="flex gap-8 lg:gap-14"><span>TOTAL PRICE:</span> <span>&#8358;{totalPrice}</span></p>
        <Link to={'/menu'} className="bg-[#d89423] hover:bg-[#ff6347] text-white py-5 px-12 rounded-full uppercase hover:text-white hover:bg-[#ff6347 text-center w-fit">Checkout  </Link>
    </div>
  )
}

export default CartSummary