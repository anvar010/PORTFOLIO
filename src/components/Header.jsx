import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full top-0 left-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold"></h1>
        <div className="flex items-center">
          {/* Hamburger Menu Button */}
          <button onClick={toggleMenu} className="block md:hidden">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          {/* Navigation Links */}
          <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block absolute md:static bg-gray-800 top-16 left-0 w-full md:w-auto md:bg-transparent`}>
            <li className="text-center md:text-left"><a href="/" className="block px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent">Home</a></li>
            <li className="text-center md:text-left"><a href="/about" className="block px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent">About</a></li>
            <li className="text-center md:text-left"><a href="/work-experience" className="block px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent">Work Experience</a></li>
            <li className="text-center md:text-left"><a href="/projects" className="block px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent">Projects</a></li>
            <li className="text-center md:text-left"><a href="/contact" className="block px-4 py-2 hover:bg-gray-700 md:hover:bg-transparent">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
