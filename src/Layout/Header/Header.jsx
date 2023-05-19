import React from 'react';
import {NavLink, Link} from "react-router-dom";

//media
import {BsHandbag} from "react-icons/bs";
import logo from './logo.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <h1 className="header__logo">
                        <img src={logo} alt=""/>
                    </h1>
                    <div className="header__links">
                        <NavLink to={''} className="header__link">
                            Home
                        </NavLink>
                        <NavLink to={'products'} className="header__link">
                            Products
                        </NavLink>
                    </div>
                    <div className="header__btns">
                        <button className="header__btn header__btn_cart">
                            <Link to={'cart'}>
                                <BsHandbag/>
                            </Link>
                        </button>
                        <button className="header__btn">
                            Call back
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;