import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-4 py-3">
      <a className="navbar-brand" href="#">
        <strong>hexnode</strong>
      </a>
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
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Why Hexnode</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Platforms</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Customers</a>
          </li>
        </ul>
        <button className="btn btn-danger ms-3">14 DAY FREE TRIAL</button>
      </div>
    </nav>
  );
};

export default Navbar;
