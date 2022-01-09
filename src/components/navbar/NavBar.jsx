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
            </nav>
        </nav>
    )
}

export default NavBar
