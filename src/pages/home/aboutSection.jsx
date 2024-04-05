import { Link } from "react-router-dom"

function AboutSection() {
  return (
    <div className="pb-12">
        <div className="flex justify-center">
        <img src="https://ofefoods.com/storage/2021/07/afang-soup.jpeg" alt="img" className="w-[200px] h-[200px] rounded-full translate-y-[-50%] z-[99] lg:w-[400px] lg:h-[400px]" />
      </div>
      <div className="our-story grid lg:grid-cols-2 px-5 lg:px-12 lg:mx-24 gap-8 lg:gap-20 md:gap-16 mt-[-100px] lg:mt-[-120px]">
    <div className="story flex flex-col mx-auto lg:mx-0 gap-12">
    <h2 className="text-center md:text-left lg:text-left">BethyFoods Delicacy</h2>
        <img src="https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2018/10/divider-free-img-1.png" alt="symbol" className="w-1/2 object-cover mx-auto lg:mx-0" />
        <h3 className="text-center md:text-left lg:text-left">Our Delicious Story</h3>
        <p className="w-full text-center md:text-left lg:text-left">At BethyFoods, we're the nation's top-rated online food vendor, proudly delivering delicious Nigerian foods and soft drinks across Lagos, Abuja, Abakaliki, Port Harcourt, Kano, Enugu, and Anambra. With numerous awards under our belt, we're dedicated to bringing the best flavors of Nigeria to your doorstep. Order now and savor the taste of excellence today!
</p>
<Link to={'/menu'} className="bg-[#d89423] text-white py-5 px-7 rounded-full uppercase text-center hover:text-white hover:bg-[#ff6347] w-2/3 md:w-1/3 mb-4 mx-auto lg:mx-0">Order Now</Link>
    </div>
    <div className="images flex gap-8">
        <img src="https://www.pointoneafricancuisine.com/wp-content/uploads/2021/05/Egusi-675x506.jpeg" alt="egusi soup"
        className="w-1/2 object-cover" />
        <img src="https://www.chilimited.com/wp-content/uploads/2015/07/new-chivita-juice.jpg" alt="chivita juice"
        className="w-1/2 object-cover" />
    </div>
      </div>
    </div>
  )
}

export default AboutSection