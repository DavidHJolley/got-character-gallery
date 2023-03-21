import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink 
              to="hero"
              exact
              className="navbar-brand"
              activeClassName="border-b-2 font-semibold text-gray-800"
              style={{paddingLeft: '2%'}}
            >
        David Jolley Portfolio
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
            <NavLink 
              to="about"
              exact
              className="nav-link"
              activeClassName="nav-link"
              style={{paddingLeft: '2%'}}
            >
              Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink 
              to="contact"
              exact
              className="nav-link"
              activeClassName="nav-link"
              style={{paddingLeft: '2%'}}
            >
              Contact
              </NavLink>
            </li>
            </ul>
        </div>
        </nav>
      </header>
    );
  }

export default Header;