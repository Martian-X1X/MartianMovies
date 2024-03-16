// src/Components/Nav.js

import React, { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <nav className="flex justify-between items-center py-4 px-8 bg-neutral-900">
        <img src={headerLogo} alt="Header Logo" className="h-20 w-auto" />
        <div className="flex items-center">
          <ul className={`flex text-red-500 font-bold ${showMenu ? 'flex-col' : 'hidden'} md:flex md:flex-row`}>
            {navLinks.map((link, index) => (
              <li key={index} className="ml-4">
                <a href={link.href} className="hover:text-red-600">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="block md:hidden">
            <button onClick={toggleMenu}>
              <img
                src={hamburger}
                alt='Hamburger'
                width={25}
                height={25}
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
