'use client';
import Link from 'next/link';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLargeFill } from 'react-icons/ri';

type NavLink = {
    href: string;
    label: string;
    isActive?: boolean;
};

const navLinks: NavLink[] = [
    { href: '#', label: 'Shop', isActive: true },
    { href: '#', label: 'Product' },
    { href: '#', label: 'Categories' },
    { href: '#', label: 'Features' },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <nav className="py-5 bg-[#3FAD3D] border-gray-200">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link data-aos="zoom-in-down" href="/" className="flex items-center space-x-3 text-gray-50 self-center text-2xl font-semibold rtl:space-x-reverse">
                    Cow milk
                </Link>

                <button
                    data-aos="zoom-in-down"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-50 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-[#3FAD3D]"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen ? 'true' : 'false'}
                >
                    <span className="sr-only">Open main menu</span>
                    {
                        isMenuOpen ? (
                            <RiCloseLargeFill data-aos="zoom-in" className="w-6 h-6" />
                        ) : (
                            <GiHamburgerMenu className="w-6 h-6" />
                        )
                    }
                </button>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        {navLinks.map((link) => (
                            <li data-aos="zoom-in-down" key={link.label} style={{ minWidth: '100px' }}>
                                <Link
                                    href={link.href}
                                    className={`block py-2 px-6 hover:font-bold rounded bg-gray-00 md:hover:bg-transparent md:p-0 ${link.isActive
                                        ? 'text-white font-bold bg-white md:bg-transparent md:text-white'
                                        : 'text-white font-normal md:hover:text-white'
                                        }`}
                                    aria-current={link.isActive ? 'page' : undefined}
                                >
                                    {link.label}
                                </Link>
                            </li>

                        ))}
                    </ul>
                </div>


                <button
                    data-aos="zoom-in-down"
                    type="button"
                    className="text-gray-50 self-center text-xl font-semibold rtl:space-x-reverse md:block hidden ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </button>


                {isMenuOpen && (
                    <div className="w-full md:hidden" id="mobile-menu">
                        <ul data-aos="fade-down" className="bg-[#295a28] rounded-lg flex flex-col px-2 mt-2 py-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <li data-aos="fade-right" key={link.label}>
                                    <Link
                                        onClick={() => setIsMenuOpen(false)}
                                        href={link.href}
                                        className={`block py-2 px-3 rounded bg-transparent ${link.isActive
                                            ? 'text-white font-bold bg-[#3FAD3D]'
                                            : 'text-white font-normal'
                                            }`}
                                        aria-current={link.isActive ? 'page' : undefined}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
