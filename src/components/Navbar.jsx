import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
        <ul className={`menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/">Eszközök</Link></li>
          <li><Link to="/add">Új Típus</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;