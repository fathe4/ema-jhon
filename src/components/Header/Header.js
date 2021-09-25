import React from 'react';
import logo from '../../images/logo.png'
import './header.css'
const Header = () => {
    return (
        <div>
            <img className='logo' src={logo} alt="" />
            <nav className="nav-menu">
                <a href="/shop">Shop</a>
                <a href="/shop">Order Review</a>
                <a href="/shop">Manage inventory here</a>
            </nav>
        </div>
    );
};

export default Header;