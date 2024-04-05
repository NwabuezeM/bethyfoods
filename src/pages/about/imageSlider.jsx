
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productData from '../../components/products/products.json'

function AboutImageSlider() {
    const images = productData.filter(product => product.featured).map(product => product.image);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000 
    };

    return (
        <div className="slider-container my-24">
            <Slider {...settings}>
                {
                    images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index}`} className="w-3/4 mx-auto h-[300px] lg:h-[350px] object-cover rounded-2xl" />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default AboutImageSlider;
