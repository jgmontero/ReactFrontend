import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from './Button';
import './Navbar.css';


function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true);

    const ShowButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        };

        useEffect(() => {
            ShowButton();
        }, [])

        window.addEventListener('resize', ShowButton);

    }
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">

                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Biscayne Research Institute <i className="fab fa-typo3"></i>
                    </Link>

                    <div className='menu-icon' onClick={handleClick} >
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                                About us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/faq' className='nav-links' onClick={closeMobileMenu}>
                                FAQ
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {(button && (getWindowDimensions().width > 960 && getWindowDimensions().height > 960)) && <Button buttonStyle='btn--outline'>Sign Up</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}