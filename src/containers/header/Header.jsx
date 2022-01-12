import React from 'react'
import './header.css'
import {Brand} from '../../components/index.js'
import imgLogo from '../../assets/logo.svg'
import infoimg from '../../assets/homepageinfographics.svg'

const TITLE = 'Code Journey';
const SUBTITE = 'Vagrant, Docker, Virtual Machine, Linux';

const Header = () => {
    return (
        <nav className="header">
           <nav className="brand">
            <Brand BrandImage={imgLogo} Title={TITLE} subtitle={SUBTITE} />
           </nav>
           <nav className="info">
            <img src= {infoimg} alt="Infographics" />
           </nav>
        </nav>
    )
}

export default Header
