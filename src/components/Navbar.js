'use client'; // Required for using useState and onClick handlers

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <h1 className="text-xl font-bold">My Dashboard</h1>
          
          {/* Desktop Menu (hidden on mobile) */}
          <div className="hidden md:flex space-x-6">
            <NavLink href="#profile">Profile</NavLink>
            <NavLink href="#academics">Academics</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#hobbies">Hobbies</NavLink>
          </div>
          
          {/* Mobile menu button (hidden on desktop) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu (shown when isOpen is true) */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="flex flex-col space-y-3">
            <MobileNavLink href="#profile" onClick={() => setIsOpen(false)}>Profile</MobileNavLink>
            <MobileNavLink href="#academics" onClick={() => setIsOpen(false)}>Academics</MobileNavLink>
            <MobileNavLink href="#skills" onClick={() => setIsOpen(false)}>Skills</MobileNavLink>
            <MobileNavLink href="#hobbies" onClick={() => setIsOpen(false)}>Hobbies</MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Reusable NavLink component for desktop
function NavLink({ href, children }) {
  return (
    <Link href={href} className="hover:text-gray-300 transition duration-300">
      {children}
    </Link>
  );
}

// Reusable NavLink component for mobile
function MobileNavLink({ href, onClick, children }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="block px-3 py-2 rounded hover:bg-gray-700 transition duration-300"
    >
      {children}
    </Link>
  );
}