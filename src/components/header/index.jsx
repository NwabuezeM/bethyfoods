import { NavLink } from 'react-router-dom';
import { navItems } from './navItems';
import { FaUserCircle, FaShoppingCart, FaSearch, FaTimes, FaShoppingBag } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import './styles.css';
import { useSelector } from 'react-redux';

function Header() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [toggleSearchForm, setToggleSearchForm] = useState(false);
    const [hamburgerClicked, setHamburgerClicked] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { cart } = useSelector(state => state)

    const navRef = useRef(null);

    const handleSearchIconClick = () => {
        setToggleSearchForm(true);
    };

    const handleMenuClick = () => {
        setHamburgerClicked(false);
    }

    const handleCloseIconClick = () => {
        setToggleSearchForm(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setHamburgerClicked(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const renderNavItem = (item) => {
        if (item.children) {
            return (
                <li key={item.label} className="dropdown">
                    <span className='dropdown-label'>{item.label}</span>
                    <ul className="dropdown-menu">
                        {item.children.map(child => (
                            <li key={child.label}>
                                <NavLink to={child.to} onClick={handleMenuClick}>{child.label}</NavLink>
                            </li>
                        ))}
                    </ul>
                </li>
            );
        } else {
            return (
                <li key={item.label}>
                    <NavLink to={item.to} onClick={handleMenuClick}>{item.label}</NavLink>
                </li>
            );
        }
    };

    return (
        <header className={`h-[80px] flex flex-col justify-center rounded-2xl p-6 fixed top-0 left-0 right-0 z-[999] ${isScrolled ? 'bg-yellow-900' : 'bg-transparent'}`}>
            <nav ref={navRef} className='flex justify-between items-center'>
                <div className="site-logo">
                    <NavLink to={'/'}>
                    <h1 className='text-4xl lg:text-6xl text-white'>BethyFoods</h1>
                    </NavLink>
                </div>
                <ul className={`menu ${hamburgerClicked ? 'show-menu' : 'hide-menu'}`}>
                    {navItems.map(item => renderNavItem(item))}
                </ul>
                <div className="icons flex gap-6 lg:gap-8 items-center text-white" onClick={() => setHamburgerClicked(!hamburgerClicked)}>
                    <div className={`hamburger pt-3 ${hamburgerClicked ? 'active' : ''}`}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <ul className="icons flex gap-6 lg:gap-4 cursor-pointer">
                        <li>
                            <FaSearch onClick={handleSearchIconClick} className='icon' />
                        </li>
                        <li>
                            <NavLink to={'/cart'} className='relative hover:text-white'><FaShoppingCart className='icon' />
                                {
                                    cart.length ? <span className='cart-quantity h-fit w-fit bg-red-600 rounded-full py-1 px-2 text-white text-xl font-bold absolute top-[-1.5rem] md:top-[-1rem] lg:top-[-1rem] right-[-1rem]'>{cart.length}</span>
                                        : null
                                }
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/profile'}>
                                {
                                    loggedIn ? <img src="https://avatars.githubusercontent.com/u/122814541?v=4" alt="user" className='h-[30px] w-[30px] rounded-full' />
                                        : <FaUserCircle className='icon' />
                                }
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </nav>

            <form className={`search-form w-full h-screen fixed top-0 left-1/2 translate-x-[-50%] flex items-center justify-center backdrop-blur-sm z-50 ${toggleSearchForm ? '' : 'translate-y-[-150%]'}`}>

                <FaTimes size={40} className='bg-transparent hover:bg-transparent absolute top-20 right-12 text-orange-400 cursor-pointer'
                    onClick={handleCloseIconClick} />

                <div className="relative w-full flex justify-center flex-col items-center">
                    <input type="text" name='query' placeholder='Search...' className='bg-transparent outline-none  border-b-4 border-b-white w-1/3 text-5xl text-white placeholder:text-white focus:bg-transparent' />
                    <button className='bg-transparent hover:bg-transparent absolute left-[65%]'><FaSearch size={24} /></button>

                </div>
            </form>
        </header>
    )
}

export default Header;
