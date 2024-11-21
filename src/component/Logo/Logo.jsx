import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="logo">
            <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width={30} height={24} className="d-inline-block align-text-top" />
            Candy Store
          </Link>
        </div>
      </nav>
    </>
  );
}
