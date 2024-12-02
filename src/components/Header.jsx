import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import '../global.css';
import SubscribeButton from "./button/SubscribeButton";

const Header = () => {

    return (
        <>
            <section className="header">
                <Link to="/">
                    <div className="app-logo"></div>
                </Link>
                <div className="header-options">
                    <Link style={{ textDecoration: 'none' }} to={"/"}>
                        <div className="home-link">Home</div>
                    </Link>

                    <SubscribeButton/>

                </div>
                <div className="search-and-user">
                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="Search..." />
                    </div>
                    <div className="user-account">
                        <Link to={'/user-details'}>
                            <FontAwesomeIcon icon={faUser} style={{ color: 'white', fontSize: '1.5rem' }}/>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header;