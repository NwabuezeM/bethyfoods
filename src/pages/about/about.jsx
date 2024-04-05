import { useEffect } from "react"
import Chefs from "./chefs"
import CoreValueAndFoodPolicy from "./coreValueAndPolicy"
import AboutHeroSection from "./heroSection"
import OurLocations from "./locations"
import OurRestaurantSection from "./ourRestaurantSection"
import './styles.css'
import WordsAboutUs from "./wordsAboutUs"
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'
import { Link, useLocation } from "react-router-dom"


function About() {

  return (
    <main>
      <section>
        <AboutHeroSection />
      </section>
      <section>
        <OurRestaurantSection />
      </section>
      <section>
        <WordsAboutUs />
      </section>
      <section>
        <CoreValueAndFoodPolicy />
      </section>
      <section>
        <Chefs />
      </section>
      <section id="locations">
        <OurLocations />
      </section>
      <div className="review flex flex-col justify-center items-center pb-36">
        <h1>Review Us On</h1>

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
    </main>
  )
}

export default About