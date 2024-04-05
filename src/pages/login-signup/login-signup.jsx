import { useState } from "react"
import Signup from "./signup"
import Login from "./login"


function LoginSignup() {
  const [formToShow, setFormToShow] = useState("login")
  return (
    <div className="flex flex-col justify-center items-center gap-10 w-[90%] md:w-3/4 lg:w-2/3 bg-white text-gray-800 mx-auto rounded-2xl py-12">
      <h2>BethyFoods</h2>
      <div className="buttons flex justify-around border-b-4 border-b-gray-600 relative mb-4 w-3/4">
        <div className={`indicator border-b-4 border-b-[#d89423] w-1/2 absolute bottom-[-0.2rem] ${formToShow === 'login' ? 'left-0' : 'right-0'}`}></div>
        <button className={`bg-transparent hover:bg-transparent text-4xl ${formToShow === 'login' ? 'text-[#d89423]' : 'text-gray-800'}`} onClick={()=> setFormToShow("login")}>Login</button>
        <button className={`bg-transparent hover:bg-transparent text-4xl ${formToShow === 'signup' ? 'text-[#d89423]' : 'text-gray-800'}`} onClick={()=> setFormToShow("signup")}>Signup</button>
      </div>
      {
        formToShow === 'signup' ? 
        <Signup />
        : <Login />
      }
    </div>
  )
}

export default LoginSignup