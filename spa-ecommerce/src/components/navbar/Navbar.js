import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

export default function Navbar() {
    return (
        <div>
            <div className="nav-container">
                <div className="nav-logo">
                    <a href="#home" className="logo"> E-commerce </a>
                </div>
                <div className="nav-list">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#products">Offres</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li> <Link to="/shop">Shop</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
