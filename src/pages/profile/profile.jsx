import { useState } from "react";
import Dashboard from "./dashboard";
import Orders from "./orders";
import Inbox from "./inbox";
import AddressBook from "./addressBook";
import EditProfile from "./editProfile";
import DeleteAccount from "./deleteAccount";
import './styles.css'

function Profile() {
  const [componentToShow, setComponentToShow] = useState("Dashboard");

  const navItems = [
    { label: "Dashboard", component: <Dashboard /> },
    { label: "Orders", component: <Orders /> },
    { label: "Inbox", component: <Inbox /> },
    { label: "Address Book", component: <AddressBook /> },
    { label: "Edit Profile", component: <EditProfile /> },
    { label: "Delete Account", component: <DeleteAccount /> },
  ];

  return (
    <div className="bg-blue-950 min-h-screen py-36 text-white">
      <div className="profile-container px-2 md:px-4 lg:px-12 mt-36">
        <div className="navigation lg:flex flex-col gap-8 bg-white/95 shadow-md shadow-black rounded-lg hidden">
          {navItems.map((item, index) => (
            <div className={`${componentToShow === item.label ? "bg-gray-300" : ""} px-6 py-3 first-of-type:rounded-t-lg`}>
              <button
              key={index}
              onClick={() => setComponentToShow(item.label)}
              className={`bg-transparent rounded-none w-full px-0 text-left text-gray-500 text-4xl hover:bg-transparent`} 
            >
              {item.label}
            </button>
            </div>
          ))}
          <div className="px-6 py-3">
          <button className="bg-transparent px-0 text-left text-gray-500 text-4xl hover:bg-transparent">Logout</button>
          </div>
        </div>
        <div className="component bg-white/95 rounded-lg">
          {navItems
            .filter((item) => item.label === componentToShow)
            .map((item) => item.component)}
        </div>
      </div>
    </div>
  );
}

export default Profile;
