import './styles.css'
import productData from '../../components/products/products.json'
import { Link } from 'react-router-dom'

function FeaturedDelicacies() {
  return (
    <div>
      <div className="background">
        <div className="introduction flex flex-col justify- items-center py-36">
        <h2 className='text-[#d89423] z-50 my-5'>Featured Delicacies</h2>
        <h3 className='z-50 text-white my-5'>Fresh from the Kitchen</h3>
        <div className="flex justify-center">
        <img src="https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2018/10/divider-free-img-1.png" alt="img" className='z-50 my-5' />
      </div>
      <p className='z-50 text-white my-5'>All Meals Are Served with Chilled Coca Cola Drink</p>
      <Link to={'/menu'} className="bg-[#d89423] text-white py-5 px-7 rounded-full uppercase text-center hover:text-white hover:bg-[#ff6347] mb-4 mx-auto z-50">Visit Our Menu To See All Delicacies</Link>
        </div>
      </div>
      <div className="content grid md:grid-cols-2 lg:grid-cols-2 md:px-20 lg:px-28 lg:gap-x-48 lg:py-28 md:py-28 justify-center items-center">
        {
          productData && productData.length ? 
          productData.map(product => product.featured ? <div key={product.id} className='grid lg:grid-cols-2 gap-0 lg:my-24 md:my-24 text-center'>
            <div className="product-info flex flex-col gap-4">
              <Link to={'/details'}><h2 className='text-[#d89423] hover:text-cyan-500 hover:underline text-center lg:text-left md:text-left'>{product.title}</h2></Link>
              <h4 className='flex gap-12 justify-center lg:justify-start md:justify-start lg:text-left md:text-left'>
                <span className='line-through text-cyan-400 text-center lg:text-left md:text-left'>&#8358;{product.price + (product.price * 0.45)}</span>
              <span className='font-bold text-cyan-500 text-center lg:text-left md:text-left'>&#8358;{product.price}</span>
              </h4>
              <p className='px-4  lg:text-left md:text-left'>{product.description.length > 180 ? product.description.slice(0, 180).concat("...") : product.description}</p>
            </div>
            <div className="product-image mx-auto">
              <Link to={'/details/:id'}>
              <img src={product.image} alt={product.title} className='h-auto md:h-[250px] lg:h-[250px] w-full p-8 lg:p-0 rounded-3xl' />
              </Link>
            </div>
          </div>
            : null)
          : null
        }
      </div>
    </div>
  )
}

export default FeaturedDelicacies