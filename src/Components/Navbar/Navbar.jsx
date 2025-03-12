import React, { useState } from "react";
import './Navbar.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {
    const [menu, setMenu] = useState("about");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar">
            <div className="logo">
                <h1>Alok</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>

            {/* Mobile Menu Open Icon */}
            <img 
                src={menu_open} 
                alt="Menu Open" 
                className={`nav-mob-open ${isMenuOpen ? 'hidden' : ''}`} 
                onClick={toggleMenu} 
            />

            {/* Mobile Menu Close Icon */}
            <img 
                src={menu_close} 
                alt="Menu Close" 
                className={`nav-mob-close ${!isMenuOpen ? 'hidden' : ''}`} 
                onClick={toggleMenu} 
            />

            {/* Menu */}
            <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#home">
                        <p onClick={() => setMenu("home")}>Home</p>
                    </AnchorLink>
                    {menu === "home" ? <img src={underline} alt="Underline" /> : null}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#about">
                        <p onClick={() => setMenu("about")}>About me</p>
                    </AnchorLink>
                    {menu === "about" ? <img src={underline} alt="Underline" /> : null}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#services">
                        <p onClick={() => setMenu("services")}>Services</p>
                    </AnchorLink>
                    {menu === "services" ? <img src={underline} alt="Underline" /> : null}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#work">
                        <p onClick={() => setMenu("work")}>Portfolio</p>
                    </AnchorLink>
                    {menu === "work" ? <img src={underline} alt="Underline" /> : null}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#contact">
                        <p onClick={() => setMenu("contact")}>Contact</p>
                    </AnchorLink>
                    {menu === "contact" ? <img src={underline} alt="Underline" /> : null}
                </li>
            </ul>

            <div className="nav-connect">
                <AnchorLink className="anchor-link" offset={50} href="#contact">
                    Connect With me
                </AnchorLink>
            </div>
        </div>
    );
}

export default Navbar;
