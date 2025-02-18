import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <p className="header__logo">App</p>
      <nav className="header__links">
        <Link to="/" className={`header__link ${location.pathname === '/' ? 'header__link_active' : ''}`}>
          Today
        </Link>
        <Link to="/schedule" className={`header__link ${location.pathname === '/schedule' ? 'header__link_active' : ''}`}>
          Schedule
        </Link>
      </nav>
    </header>
  );
}