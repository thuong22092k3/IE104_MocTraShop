import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import { BagIcon, SearchIcon, AccountIcon,MenuIcon } from '../Icons/index.jsx';
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
                <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <Link to="/collections">BỘ SƯU TẬP TRÀ</Link>
                        </li>
                        <li>
                            <Link to="/accessories">PHỤ KIỆN</Link>
                        </li>
                        <li>
                            <Link to="/blog">BLOG</Link>
                        </li>
                        <li>
                            <Link to="/Contact">LIÊN HỆ</Link>
                        </li>
                    </ul>
                </nav>
                <div className="icons">
                    <div className="search-icon">
                        <Link to="/search">
                            <SearchIcon />
                        </Link>
                    </div>
                    <div className="account-icon">
                        <Link to="/account">
                            <AccountIcon />
                        </Link>
                    </div>
                    <div className="cart-icon">
                        <Link to="/cart">
                            <BagIcon />
                        </Link>
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
