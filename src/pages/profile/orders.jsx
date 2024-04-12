import { Link } from "react-router-dom"

function Orders() {
  return (
    <div className="text-gray-500">
      <div className="flex flex-col items-center justify-center h-full">
      <h2>You do not ave any order yet!</h2>
      <Link to={"/menu"} className="text-blue-500">Go to Menu</Link>
      </div>
    </div>
  )
}

export default Orders