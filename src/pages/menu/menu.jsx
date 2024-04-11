import React, { useState } from 'react';
import FeaturedMenu from './featuredMenu';
import MenuHeroSection from './menuHeroSection';
import MenuList from './menuList';
import productData from '../../components/products/products.json';
import './styles.css';
import Sidebar from './sidebar';

function Menu() {
  
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
