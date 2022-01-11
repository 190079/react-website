import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./navbar.css"
import logo from "../../assets/logo.svg"
import {Seperator,Marginer} from "../index"
const NavBar = () => {
    return (
        <nav className="navbar">
            <nav className="navbar-links">
                <nav className="navbar-links_logo">
                <img src={logo} alt="Logo" />
                </nav>
                <nav className="navbar-start">
                    <a href="#home">Home</a>
                    <Marginer direction="horizontal" margin={10} />
                    <a href="#Services">Services</a>
                </nav>
                <nav className="navbar-end">
                <a href="#Register">Sign up</a>
                <Marginer direction="horizontal" margin={10} />
                <Seperator />
                </nav>
            </nav>
        </nav>
    )
}

export default NavBar
