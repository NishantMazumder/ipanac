import React from "react";
import "./Navbar.css"; // Import the CSS file
import {Menu , X} from "lucide-react";
import { useState } from "react";
import {Link} from "react-router-dom";

function Navbar() {
    const [mobileDrawerOpen , setMobileDrawerOpen] = useState(false);
    
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
    
    return (
        <nav className="navbar">
            <div className="container">
                {/* Contact Info Section */}
                <div className="contact-info">
                    <span className="address">123 Main Street, City, Country</span>
                    <span className="phone">+1 (123) 456-7890</span>
                    <span className="emailid">abc123@gmail.com</span>
                </div>

                {/* Navbar Content */}
                <div className={`navbar-content ${mobileDrawerOpen ? 'mobileDrawerOpen' : ''}`}>
                    {/* Logo and Title */}
                    <div className="logo-container">
                        <img className="logo" src="/IPANAC.jpg" alt="logo" />
                        <Link to="/" className="title">IPANAC Relocation</Link>
                        <div className="mobile-menu-button">
                            <button onClick={toggleNavbar}>
                                {mobileDrawerOpen ? <X/> : <Menu/>}
                            </button>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="nav-links">
                        <Link to="/about" className="nav-item">About Us</Link>
                        <Link to="/services" className="nav-item">Services</Link>
                        <Link to="/locations" className="nav-item">Locations</Link>
                        <Link to="/contact" className="nav-item">Contact Us</Link>
                    </div>

                    {/* Sign In & Register Buttons */}
                    <div className="auth-buttons">
                        <Link to="/signin" className="sign-in">Sign In</Link>
                        <Link to="/register" className="register">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
