import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./navbar.css"
import logo from "../../assets/logo.svg"
import {Seperator,Marginer,CustomButton} from "../index"
import AccessibilityContainer from '../../containers/accessibility/AccessibilityContainer';

const NavBar = () => {
    return (
        <nav className="navbar">
            <nav className="navbar-links">
                <nav className="navbar-links_logo">
                <img src={logo} alt="Logo" />
                </nav>
                <nav className="navbar-start">
                <AccessibilityContainer>
                    <a href="#home">Home</a>
                    <Marginer direction="horizontal" margin={10} />
                    <a href="#Services">Services</a>
                    </AccessibilityContainer>
                </nav>
                <AccessibilityContainer>
                <nav className="navbar-end">
                <a href="#Register">Sign up</a>
                <Marginer direction="horizontal" margin={5} />
                <Seperator />
                <Marginer direction="horizontal" margin={5} />
                <CustomButton type='rounded' action="console.log('Sign In')">Log In</CustomButton>
                </nav>
            </AccessibilityContainer>    
            </nav>
        </nav>
    )
}

export default NavBar
