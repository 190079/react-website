import React from 'react'
import "./brand.css"

const BrandContainer = ({children}) => {
    return <nav className='BrandContainer' >{children}</nav>
}
const BrandLogoContainer = ({children}) => {
    return <nav className="BrandLogoContainer">{children}</nav>
}

const LogoImage = ({children}) => {
    return <nav className="LogoImage">{children}</nav>
}

const LogoTitle =({children}) => {
    return <h1 className="Title">{children}</h1>
}

const SubTitle =({children}) => {
    return <h3 className="SubTitle">{children}</h3>
}

const TextContainer = ({children}) => {
    return <nav className="TextContainer">{children}</nav>;
}

const Brand = ({BrandImage,Title,subtitle}) => {
    return (
        <BrandContainer>
        <BrandLogoContainer>
            <LogoImage>
                <img src={BrandImage} alt="Logo" />
            </LogoImage>
        </BrandLogoContainer>
        <TextContainer>
        <LogoTitle>{Title}</LogoTitle>
        <SubTitle>{subtitle}</SubTitle>
        </TextContainer>
        </BrandContainer>
    )
}

export default Brand
