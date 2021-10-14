import React from 'react';
import './navbar.css'

export default function Navbar() {
    return (
        <div>
            <div className="nav-container">
                <div className="nav-logo">
                    <h1> E-commerce </h1>
                </div>
                <div className="nav-list">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Our Products</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
