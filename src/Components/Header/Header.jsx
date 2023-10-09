import React from 'react';
import { Link } from 'react-router-dom';
// import '../../sass/Components/Header.scss'; // Import file SCSS
import { BagIcon, SearchIcon, AccountIcon } from '../Icons/index.jsx';
const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <Link to="/">BrandName</Link>
                </div>
                <nav className="navbar">
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
                </div>
            </div>
        </header>
    );
};

export default Header;
