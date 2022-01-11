import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./navbar.css"
import logo from "../../assets/logo.svg"
const NavBar = () => {
    return (
        <nav className="navbar">
            <nav className="navbar-links">
                <nav className="navbar-links_logo">
                <img src={logo} alt="Logo" />
                </nav>
                <nav className="navbar-start">
                    <a href="#home">Home</a>
                    <a href="#Services">Services</a>
                </nav>
                <nav className="navbar-end">
                <a href="#Register">Register</a>

                </nav>
            </nav>
        </nav>
    )
}

export default NavBar
