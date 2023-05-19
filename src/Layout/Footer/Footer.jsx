import React from 'react';
import {Link} from "react-router-dom";

//media
import logo from './logo.svg'
import facebook from './facebook.svg'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-small">
                <nav className="footer__nav">
                    <div className="footer__logo">
                       <Link to={''}>
                           <img src={logo} alt=""/>
                       </Link>
                        <p className="footer__logo-desc">
                            © Oksy-G, 2021
                        </p>
                    </div>
                    <div className="footer__menu">
                        <h3 className="footer__menu-title">
                            Menu
                        </h3>
                        <div className="footer__menu-links">
                            <Link to={''} className="footer__menu-link">
                                Home
                            </Link>
                            <Link to={'products'} className="footer__menu-link">
                                Products
                            </Link>
                        </div>
                    </div>
                    <div className="footer__menu">
                        <h3 className="footer__menu-title">
                            Products
                        </h3>
                        <div className="footer__menu-links">
                            <Link to={'products'} className="footer__menu-link">
                                Goat Milk Kefir – Plain
                            </Link>
                            <Link to={'products'} className="footer__menu-link">
                                Goat Milk Kefir – Vanilla
                            </Link>
                        </div>
                    </div>
                    <div className="footer__menu">
                        <h3 className="footer__menu-title">
                            SOCIAL MEDIA
                        </h3>
                        <div className="footer__menu-socials">
                            <Link to={'products'} className="footer__menu-social">
                                <img src={facebook} alt=""/>
                            </Link>
                            <Link to={'products'} className="footer__menu-social">
                                <img src={facebook} alt=""/>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;