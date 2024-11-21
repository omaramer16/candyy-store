import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <h5 className="navbar-brand">Candy Shop</h5>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="home">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle store-link" to="child" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Store
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/bouquet-flowers">Bouquet Flowers</Link></li>
                  <li><Link className="dropdown-item" to="/girls-gifts">Girls gifts</Link></li>
                  <li><Link className="dropdown-item" to="/frames">Frames</Link></li>
                  <li><Link className="dropdown-item" to="/mobile-cases"> Mobile cases</Link></li>
                  <li><Link className="dropdown-item" to="/boys-gifts"> Boys gifts</Link></li>
                  <li><Link className="dropdown-item" to="/ramadan">Ramadan</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">Contact us </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
