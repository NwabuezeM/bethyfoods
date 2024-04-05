import { useState } from "react";
import LoginSignup from "../login-signup/login-signup";


function Profile() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  return (
    <div className="bg-blue-950 min-h-screen py-36 text-white">
      {
        userLoggedIn ? 
        <h1>My Profile</h1>
        :
        <LoginSignup />
      }
    </div>
  )
}

export default Profile;