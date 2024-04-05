import { Route, Routes, useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Home from './pages/home/home'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Cart from './pages/cart/cart'
import Favourites from './pages/favourites/favourites'
import LoginSignup from './pages/login-signup/login-signup'
import PrivacyPolicy from './pages/privacy-policy/privacyPolicy'
import ProductDetails from './pages/product-detail/details'
import TermsOfService from './pages/terms-of-service/termsOfService'
import Header from './components/header'
import Footer from './components/footer/footer'
import SpecialRequest from './pages/special-request/specialRequest'
import ChefApplicant from './pages/chef applicants/chefApplicants'
import Reservation from './pages/Reservation/reservation'
import Menu from './pages/menu/menu'
import Profile from './pages/profile/profile'
import ResetPassword from './pages/login-signup/resetPassword'
function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = getPageTitle(location.pathname);
  }, [location.pathname]);

  const getPageTitle = (path) => {
    switch (path) {
      case '/': return 'Home | Bethyfoods Delicacy';
      case '/about': return 'About | Bethyfoods Delicacy';
      case '/menu': return 'Our Menu | Bethyfoods Delicacy';
      case '/contact': return 'Contact | Bethyfoods Delicacy';
      case '/favourites': return 'Favourites | Bethyfoods Delicacy';
      case '/cart': return 'Cart | Bethyfoods Delicacy';
      case '/login-signup': return 'Login/Signup | Bethyfoods Delicacy';
      case '/reset-password': return 'Password Reset | Bethyfoods Delicacy';
      case '/profile': return 'My Profile | Bethyfoods Delicacy';
      case '/privacy-policy': return 'Privacy Policy | Bethyfoods Delicacy';
      case '/terms-and-conditions': return 'Terms ofService | Bethyfoods Delicacy';
      case '/details/:id': return 'Detail | Bethyfoods Delicacy';
      case '/special-request': return 'Special Request | Bethyfoods Delicacy';
      case '/reservation': return 'Reservation | Bethyfoods Delicacy';
      default: return 'Bethyfoods Delicacy';
    }
  }

  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/login-signup' element={<LoginSignup />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/details/:id' element={<ProductDetails />} />
        <Route path='/terms-and-conditions' element={<TermsOfService />} />
        <Route path='/special-request' element={<SpecialRequest />} />
        <Route path='/happy-hour-seat-reservation' element={<Reservation />} />
        <Route path='/chef-applicant' element={<ChefApplicant />} />
        <Route path='*' element={<div className='flex flex-col gap-8 justify-center items-center h-screen'><h1>PAGE NOT FOUND</h1>
        <Link to={'/'} className='text-blue-600 hover:underline text-4xl'>Home</Link>
        </div>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
