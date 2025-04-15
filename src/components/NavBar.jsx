import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { NAVIGATION_LINKS } from '../constants/index.jsx';

const NavBar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
        setMobileMenuOpen(false);
    };

    return (
        <div>
            <nav className='fixed left-0 right-0 top-4 z-50'>
                {/* Desktop menu */}
                <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-black/20 py-3 backdrop-blur-lg lg:flex'>
                    <div className='flex justify-between gap-6'>
                        <div>
                            <a href="#">
                                <img src={logo} alt="logo" className='h-10 w-30 ml-0' />
                            </a>
                        </div>
                        <div>
                            <ul className='flex justify-center items-center gap-4'>
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className='text-sm hover:text-green-400'
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className='rounded-lg backdrop-blur-md lg:hidden'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <a href="#">
                                <img src={logo} width={90} alt="logo" className='m-2' />
                            </a>
                        </div>
                        <div className='flex items-center'>
                            <button
                                className='focus:outline-none lg:hidden'
                                onClick={toggleMobileMenu}
                            >
                                {isMobileMenuOpen ? (
                                    <FaTimes className='m-2 h-6 w-5' />
                                ) : (
                                    <FaBars className='m-2 h-6 w-5' />
                                )}
                            </button>
                        </div>
                    </div>
                    {isMobileMenuOpen && (
                        <ul className='absolute right-0 top-16 z-50 flex w-full flex-col items-center justify-center gap-4 rounded-lg bg-black/20 py-3 backdrop-blur-lg lg:hidden'>
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        onClick={(e) => handleLinkClick(e, item.href)}
                                        className='block w-full text-xl font-semibold'
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;