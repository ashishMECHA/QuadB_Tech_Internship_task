import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to='/'>
        <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-500x281.png" alt="Movie Booking App" />
        </Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Movies</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Theatres</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
        <li className="nav-item">
          <button className="nav-button">Login</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
