import { Link } from "react-router-dom"

function HappyHour() {
  return (
    <div className="happy-hour flex flex-col gap-4 min-h-[70vh] lg:min-h-[85vh] items-center justify-center text-white">
      <h3 className="z-50">Enjoy 50% Off on All Drinks</h3>
      <h2 className="text-[#d89423] z-50">Happy Hours</h2>
      <p className="z-50">Every Friday, 4PM - 8PM</p>
      <Link to={'/menu'} className="bg-[#d89423] text-white py-5 px-7 rounded-full uppercase text-center hover:text-white hover:bg-[#ff6347] my-4 mx-auto z-50">Reserve a Table</Link>
    </div>
  )
}

export default HappyHour