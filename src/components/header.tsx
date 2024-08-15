import Modal from '@/ui/modal';
import { IconArrowRight, IconMenu, IconHome, IconInfoCircle, IconMail } from '@tabler/icons-react';
import React, { useState } from 'react';
import Link from 'next/link';


const Header: React.FC = () => {
  // State for managing modal visibility
  const [modal, setModal] = useState(false);
  // State for managing mobile menu visibility
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle modal visibility
  const triggerModal = () => setModal(!modal);
  // Function to toggle mobile menu visibility 
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="relative z-50 w-full h-16 shadow-lg bg-gradient-to-r from-purple-500 to-indigo-600">
      {/* Modal component with trigger function */}
      <Modal opened={modal} trigger={() => triggerModal()} />

      <div className="container flex items-center justify-between h-full px-6 mx-auto">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide text-white animate-pulse">CSSCRAFT</h1>

        {/* Desktop Navigation Menu */}
        <div className="items-center hidden space-x-8 md:flex">
          <Link href="/Homepage " className="text-white transition-colors duration-300 hover:text-indigo-200">
            Home
          </Link>
          <Link href="/About" className="text-white transition-colors duration-300 hover:text-indigo-200">
            About
          </Link>
          <Link href="/Contact" className="text-white transition-colors duration-300 hover:text-indigo-200">
            Contact
          </Link>
          {/* Login Button */}
          <button
            onClick={triggerModal}
            className="items-center hidden gap-2 px-6 py-2 font-bold text-indigo-600 transition-shadow duration-300 bg-white rounded-full shadow-md md:flex hover:shadow-xl hover:bg-indigo-50"
          >
            Login
            <IconArrowRight size={20} />
          </button>
        </div>

        {/* Hamburger Menu Button for Small Screens */}
        <button
          onClick={toggleMobileMenu}
          className="p-2 transition-transform duration-300 transform rounded-md hover:scale-105 md:hidden"
          style={{
            background: 'linear-gradient(to right, #3a3a3a, #1a1a1a)', // Dark gradient background
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Subtle shadow for depth
          }}
        >
          <IconMenu size={24} className="text-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
      className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-lg transform transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} z-40 overflow-y-auto`}
      style={{ backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)' }} // Blur effect
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold">Menu</h2>
        {/* Close Button for Mobile Menu */}
        <button
          onClick={toggleMobileMenu}
          className="text-gray-300 hover:text-gray-100"
        >
          <IconMenu size={24} />
        </button>
      </div>
      <nav className="mt-8">
        <Link href="/Homepage" className="flex items-center px-4 py-2 hover:bg-gray-700" onClick={toggleMobileMenu}>
          <IconHome size={20} className="mr-3" />
          Home
        </Link>
        <Link href="/About" className="flex items-center px-4 py-2 hover:bg-gray-700" onClick={toggleMobileMenu}>
          <IconInfoCircle size={20} className="mr-3" />
          About
        </Link>
        <Link href="/Contact" className="flex items-center px-4 py-2 hover:bg-gray-700" onClick={toggleMobileMenu}>
          <IconMail size={20} className="mr-3" />
          Contact
        </Link>
        {/* Login Button in Mobile Menu */}
        <button
          onClick={triggerModal}
          className="relative block w-full px-4 py-3 mt-4 mb-6 overflow-hidden text-left text-white transition-transform transform rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 hover:scale-105"
        >
          <span className="relative z-10">Login</span>
          <IconArrowRight size={20} className="absolute z-10 transition-transform transform -translate-y-1/2 right-4 top-1/2 group-hover:translate-x-2" />
          <span className="absolute inset-0 border-2 border-transparent border-t-indigo-600 border-l-transparent border-r-transparent border-b-indigo-600 transform rotate-45 translate-x-[-10%] translate-y-[-10%] z-0"></span>
        </button>
        </nav>
      </div>
    </header>
    
  );
};

export default Header;
