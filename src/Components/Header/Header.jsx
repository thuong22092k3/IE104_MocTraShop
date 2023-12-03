import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { BagIcon, SearchIcon, AccountIcon, MenuIcon } from "../Icons/index.jsx";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">BrandName</Link>
        </div>
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink to="/collections" activeClassName="active">
                BỘ SƯU TẬP TRÀ
              </NavLink>
            </li>
            <li>
              <NavLink to="/accessories" activeClassName="active">
                PHỤ KIỆN
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" activeClassName="active">
                BLOG
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                LIÊN HỆ
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="icons">
          <div className="search-icon">
            <NavLink to="/search" activeClassName="active">
              <SearchIcon />
            </NavLink>
          </div>
          <div className="account-icon">
            <NavLink to="/account" activeClassName="active">
              <AccountIcon />
            </NavLink>
          </div>
          <div className="cart-icon">
            <NavLink to="/mybag" activeClassName="active">
              <BagIcon />
            </NavLink>
          </div>
          <div className="mobile-menu-button" onClick={toggleMenu}>
            <MenuIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
