import FeaturedMenu from './featuredMenu'
import MenuHeroSection from './menuHeroSection'
import MenuList from './menuList/menuList'
import ProductFilter from './productFilter'
import './styles.css'

function Menu() {
  return (
    <main>
      <section>
        <MenuHeroSection />
      </section>
      <section>
        <FeaturedMenu />
      </section>
      <div className='flex gap-8 px-20'>
        <ProductFilter />
        <MenuList />
      </div>
    </main>
  )
}

export default Menu