
import Slider from "react-slick";
import productData from '../../components/products/products.json';
import { Link } from "react-router-dom";

function FeaturedMenu() {
  const featuredProducts = productData.filter(product => product.featured)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div className="slider-container py-36 px-8 lg:px-36">
      <Slider {...settings}>
        {featuredProducts.map(product => (
          <div key={product.id} className="px-6">
            <Link to={`/details/${product.id}`}>
              <img src={product.image} alt={product.title} className="w-[150px] h-[100px] rounded-2xl shadow-lg shadow-black/45 object-cover" />
              <p className="mt-4 text-3xl font-bold">{product.title}</p>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FeaturedMenu;
