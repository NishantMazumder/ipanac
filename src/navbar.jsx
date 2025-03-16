import React from "react";
import "./Navbar.css"; // Import the CSS file
import {Menu , X} from "lucide-react";
import { useState } from "react";

// import {Menu , X} from "lucide-react";
// import { useState } from "react";

function Navbar() {


    const [mobileDrawerOpen , setMobileDrawerOpen] = useState(false);

    
    const toggleNavbar = () =>{
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
                <div className="navbar-content">
                    {/* Logo and Title */}
                    <div className="logo-container">
                        <img className="logo" src="/IPANAC.jpg" alt="logo" />
                        
                        <div className="title">IPANAC Relocation</div>
                        </div>

                    {/* Navigation Links */}
                    <div className="nav-links">
                        {["About Us", "Services", "Locations", "Contact Us"].map((nav, i) => (
                            <div key={i} className="nav-item">{nav}</div>
                        ))}
                    </div>

                    {/* Sign In & Register Buttons */}
                    <div className="auth-buttons">
                        <a href="#" className="sign-in">Sign In</a>
                        <a href="#" className="register">Register</a>
                    </div>
                <div className = "lg:hidden md:flex flex-col justify-end">
                    <button onClick = {toggleNavbar}>
                        {mobileDrawerOpen ? <X/> : <Menu/>}
                    </button>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
