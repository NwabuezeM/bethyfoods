import { FaPen } from "react-icons/fa"

function Dashboard() {
  return (
    <div className="text-gray-500">
      <h2 className="text-center lg:text-left lg:px-16">Account Overview</h2>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 px-2 lg:px-16">
      <div className="border-2 border-gray-400 rounded-lg lg:w-1/2">
        <div className="border-b-2 border-b-gray-400">
        <h3 className="text-4xl p-6">ACCOUNT DETAILS</h3>
        </div>
        <div className="p-6 flex flex-col items-center gap-4">
          <img src="https://www.pointoneafricancuisine.com/wp-content/uploads/2021/05/Egusi-675x506.jpeg" alt="profile picture" className="h-40 w-40 object-cover rounded-full" />
          <p>Nwabueze Okemini</p>
          <p>okemininwabueze9@gmail.com</p>
        </div>
      </div>
      
      <div className="border-2 border-gray-400 rounded-lg lg:w-1/2">
        <div className="flex justify-between border-b-2 border-b-gray-400">
        <h3 className="text-4xl p-6">ADDRESS BOOK</h3>
        <div className="flex items-center pr-8 text-[#d89423]">
        <FaPen size={18} />
        </div>
        </div>
        <div className="p-6">
          <p className="font-bold">Your default shipping address</p>
          <p>Nwabueze Okemini</p>
          <p>Abakpa Ogoja</p>
          <p>Ogoja, Cross River</p>
          <p>07014126583</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard