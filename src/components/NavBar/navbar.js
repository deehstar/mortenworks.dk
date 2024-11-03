import React, { useState } from 'react';
import './navbar.css';
import mailIcon from '../../assets/mail-icon.png';
import linkedinIcon from '../../assets/linkedin-icon.png';
import githubIcon from '../../assets/github-icon.png';
import logo from '../../assets/logo.png';

const Navbar = ({ activeSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />

            {/* Desktop Menu */}
            <ul className="desktopMenu">
                <li className={activeSection === 'intro' ? 'active' : ''}>
                    <a href="#intro">home</a>
                </li>
                <li className={activeSection === 'about' ? 'active' : ''}>
                    <a href="#about">about</a>
                </li>
                <li className={activeSection === 'projects' ? 'active' : ''}>
                    <a href="#projects">projects</a>
                </li>
                <li className={activeSection === 'contactPage' ? 'active' : ''}>
                    <a href="#contactPage">contact</a>
                </li>
            </ul>

            {/* Burger Menu Icon */}
            <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Mobile Menu */}
            <ul className={`mobileMenu ${isMenuOpen ? 'open' : ''}`}>
                <li className={activeSection === 'intro' ? 'active' : ''}>
                    <a href="#intro" onClick={toggleMenu}>home</a>
                </li>
                <li className={activeSection === 'about' ? 'active' : ''}>
                    <a href="#about" onClick={toggleMenu}>about</a>
                </li>
                <li className={activeSection === 'projects' ? 'active' : ''}>
                    <a href="#projects" onClick={toggleMenu}>projects</a>
                </li>
                <li className={activeSection === 'contactPage' ? 'active' : ''}>
                    <a href="#contactPage" onClick={toggleMenu}>contact</a>
                </li>
            </ul>

            {/* Social Media Links */}
            <div className="socialMedia">
                <div className="block">
                    <div className="block__item">
                        <a href="https://www.linkedin.com/in/morten-andersen-ba00a6208/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" className="iconBtnImg" />
                        </a>
                    </div>
                </div>
                <div className="block">
                    <div className="block__item">
                        <a href="https://github.com/deehstar?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub" className="iconBtnImg" />
                        </a>
                    </div>
                </div>
                <div className="block">
                    <div className="block__item">
                        <a href="#contactPage">
                            <img src={mailIcon} alt="Mail" className="iconBtnImg" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
