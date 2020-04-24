import React from 'react';
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <nav className="main-nav">
        <li>
          <Link className="header-link" to="/">Home</Link>
        </li>
        <li>
          <Link className="header-link" to="/user">Profile</Link>
        </li>
        <li>
          <Link className="header-link" to="/about">About</Link>
        </li>
      </nav>
    </div>
  );
}

export default Header;
