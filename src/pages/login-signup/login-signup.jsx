import { useState } from "react"
import Signup from "./signup"
import Login from "./login"
import { Spinner } from 'react-loading-io'



function LoginSignup() {
  const [formToShow, setFormToShow] = useState("login")
const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-950 relative">
      {
        loading && <div className="flex justify-center items-center gap-10 w-[90%] md:w-3/4 lg:w-2/3 bg-white/75 text-gray-800 mx-auto rounded-2xl my-36 min-h-[70vh] absolute top-0 right-0 left-0 z-50 backdrop:blur-sm">
          <Spinner size={200} />
        </div>
      }
      <div className="flex flex-col justify-center items-center gap-10 w-[90%] md:w-3/4 lg:w-2/3 bg-white text-gray-800 mx-auto rounded-2xl my-36">
        <h2>BethyFoods</h2>
        <div className="buttons flex justify-around border-b-4 border-b-gray-600 relative mb-4 w-3/4">
          <div className={`indicator border-b-4 border-b-[#d89423] w-1/2 absolute bottom-[-0.2rem] ${formToShow === 'login' ? 'left-0' : 'right-0'}`}></div>
          <button className={`bg-transparent hover:bg-transparent text-4xl ${formToShow === 'login' ? 'text-[#d89423]' : 'text-gray-800'}`} onClick={() => setFormToShow("login")}>Login</button>
          <button className={`bg-transparent hover:bg-transparent text-4xl ${formToShow === 'signup' ? 'text-[#d89423]' : 'text-gray-800'}`} onClick={() => setFormToShow("signup")}>Signup</button>
        </div>
        {
          formToShow === 'signup' ?
            <Signup setLoading={setLoading} />
            : <Login setLoading={setLoading} />
        }
      </div>
    </div>
  )
}

export default LoginSignup