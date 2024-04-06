import React, { useState } from 'react';
import FeaturedMenu from './featuredMenu';
import MenuHeroSection from './menuHeroSection';
import MenuList from './menuList/menuList';
import productData from '../../components/products/products.json';
import ProductFilter from './productFilter';
import './styles.css';
import ProductCard from '../../components/products/productCard';

function Menu() {
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [startValue, setStartValue] = useState(500);
  const [endValue, setEndValue] = useState(4000);

  const filterByPrice = () => {
    const filteredProduct = productData.filter(product => product.price >= startValue && product.price <= endValue);
    setFilteredProducts(filteredProduct);
  };

  return (
    <main>
      <section>
        <MenuHeroSection />
      </section>
      <section>
        <FeaturedMenu />
      </section>
      <section>
        <MenuList />
      </section>

    </main>
  );
}

export default Menu;
