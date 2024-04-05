import { Link } from "react-router-dom"
import './styles.css'


function HeroSection() {
    return (
        <div className="hero min-h-[80vh] lg:min-h-screen md:min-h-[90vh] flex justify-center text-white">
            <div className="container flex flex-col items-center justify-center gap-12 lg:w-2/3 md:w-2/3 min-h-screen text-center">
            <h1 className="z-40 mt-36 lg:mt-0 md:mt-0 text-[#d89423]">Best Food Delivery Service In Nigeria</h1>
            <p className="text-center text-4xl z-40 leading-[30px]">
            We're Nigeria's top food delivery service, bringing high-quality flavors to your doorstep. Explore diverse cuisines, satisfy cravings, and elevate your dining experience with ease. Order now!
            </p>
            <div className="links flex flex-col md:flex-row lg:flex-row items-center gap-12 z-40">
                <Link to={'/menu'} className="bg-[#d89423] hover:bg-[#ff6347] text-white py-5 px-7 rounded-full uppercase hover:text-white hover:bg-[#ff6347">Explore Our Menu</Link>
                <Link to={'/special-request'} className="text-white py-4 px-6 rounded-full border-2 border-white uppercase hover:text-white hover:bg-[#ff6347] hover:border-none">Request a Special Order</Link>
            </div>
            </div>
        </div>
    )
}

export default HeroSection