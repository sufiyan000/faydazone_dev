// Header.jsx
import React from 'react';
import Link from 'next/link';
import Search from '@/app/ui/search';
import AcmeLogo from '@/app/ui/acme-logo';
import { lusitana } from '@/app/ui/fonts';
const Header = () => {
  return (
    <header className="bg-gray-900 text-white sticky p-4">
      <div className="container h-[50px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <AcmeLogo />

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className={`${lusitana.className} text-sm hover:text-[#07f0f0] `}>
              Home
          </Link>
          <Link href="/" className={`${lusitana.className} text-sm hover:text-[#07f0f0] `}>
              Shop
          </Link>
          <Link href="/" className={`${lusitana.className} text-sm hover:text-[#07f0f0] `}>
              Category
          </Link>
          <Link href="/" className={`${lusitana.className} text-sm hover:text-[#07f0f0] `}>
              Services
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="flex items-center space-x-2 text-black">
          <Search placeholder="Search Products..." />
          {/* <input
            type="text"
            placeholder="Search products..."
            className="px-3 py-1 rounded bg-gray-800 text-sm text-white focus:outline-none"
          />
          <button className="bg-[#07f0f0] text-gray-900 px-3 py-1 rounded text-sm">
            Search
          </button> */}
        </div>

        {/* Icons for Cart and User Account */}
        <div className="flex items-center space-x-4">
        <Link href="/" className="text-sm hover:text-[#07f0f0] relative">
        <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l1.6 5M17 13l-1.6 5M9 18h6"
              />
            </svg>
            {/* Cart item count badge */}
            <span className="absolute -top-2 -right-2 bg-[#07f0f0] text-gray-900 rounded-full text-xs w-5 h-5 flex items-center justify-center">
              3
            </span>
          </Link>
          
          <Link href="/signin" className="text-sm hover:text-[#07f0f0] relative">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A5 5 0 0112 15a5 5 0 016.879 2.804M15 10a3 3 0 10-6 0 3 3 0 006 0zm3.98 3.421a8.003 8.003 0 10-11.962 0"
              />
            </svg>
          </Link>
         
        </div>

        {/* Mobile Menu Button */}
        {/* <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
