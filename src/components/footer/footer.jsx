
import { Link } from "react-router-dom"
import { about, menuList, locations } from "./footerItems"
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'
import './styles.css'
import { HashLink } from 'react-router-hash-link';

function Footer() {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 py-24 lg:py-40 text-white min-h-[80vh] lg:min-h-screen">
      <div className="introduction text-center lg:text-left">
        <h3 className="z-50">BethyFoods</h3>
        <p>Experience Naija Delicacies: We bring mouthwatering Nigerian foods right to your house. Many Nigerians as well as foreigners trust our food. Additionally, we provide soft drinks for your ultimate refreshment.
        </p>
      </div>

      <div className="about text-center lg:text-left">
        <h3 className="z-50">About Us</h3>
        <ul className="">
          {
            about.map((item, index) => <li key={index} className="z-[50]">
              <HashLink smooth to={`${item.to}#top`}>{item.label}</HashLink>
            </li>)
          }
        </ul>
        <ul className="flex gap-12 justify-center lg:justify-start items-center mt-8">
          <li>
            <Link><BsFacebook size={24} className="text-[#1877f2]" /></Link>
          </li>
          <li>
            <Link><BsInstagram size={24} className="text-[#f56040]" /></Link>
          </li>
          <li>
            <Link><FaXTwitter size={24} /></Link>
          </li>
          <li>
            <Link><BsWhatsapp size={24} className="text-green-500" /></Link>
          </li>
        </ul>
      </div>
      <div className="menu-items text-center lg:text-left">
        <h3>Our Menu</h3>
        <ul>
          {
            menuList.map((item, index) => <li key={index}>
              <HashLink smooth to={item.to}>{item.label}</HashLink>
            </li>)
          }
        </ul>
      </div>

      <div className="locations text-center lg:text-left">
        <h3>Our Locations</h3>
        <ul>
          {
            locations.map((item, index) => <li key={index}>
              <HashLink smooth to={`${item.to}#locations`}>{item.label}</HashLink>
            </li>)
          }
        </ul>
      </div>
      <div className="copyright">
        <p>Copyright &copy; {currentYear} BethyFoods</p>
        <p>Created by <a href="https://nwabuezeokemini.vercel.app" target="_blank" className="text-blue-500">Nwabueze Okemini</a></p>

      </div>
    </footer>
  )
}

export default Footer