import AboutImageSlider from "./imageSlider"


function OurRestaurantSection() {
  return (
    <div className='text-center gap-8 px-4 py-16 md:px-8 lg:w-2/3 lg:mx-auto'>
        <h1 className="my-12">Our Restaurant</h1>
        <p>Serving the best meals and soft drinks since 2021</p>
        <p className="my-12">We are rated as the best in Nigeria, and our customers testify to our excellence nationwide. Additionally, we are certified and recognized as the best by NAFDAC.</p>
        <img src="https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2018/10/divider-free-img-1.png" alt="img" className='mx-auto my-12' />
        <p className="my-12">
        Experience consistent excellence whether online or offline. Our services remain unparalleled across all our active states of operation. Enjoy the same level of quality and attention to detail whether you visit our restaurant or order online. Plus, count on us for the best customer service experience every time.
        </p>
        <AboutImageSlider />
    </div>
  )
}

export default OurRestaurantSection