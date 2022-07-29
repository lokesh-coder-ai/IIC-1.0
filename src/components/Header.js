import React, { useState } from 'react';
import './header.css';

function Header() {
    const [classesName, updateclassesName] = useState(["header-hamburger-off", "header-mobile"]);

    var callupdateclassesName = () => {
        updateclassesName((prevclassesName) => {
            if (prevclassesName[0] == "header-hamburger-off")
                return ["header-hamburger-on", "header-pc"];
            return ["header-hamburger-off", "header-mobile"];
        });
    };

    return (
        <div id="header">
            <a id="header-logo" href='#'>

                <img src="logo1.png" alt="logo" />

                <div className={classesName[0]} onClick={callupdateclassesName}>
                    <div className="hamburger-bar1"></div>
                    <div className="hamburger-bar2"></div>
                    <div className="hamburger-bar3"></div>
                </div>
            </a>

            <div id="header-list" className={classesName[1]}>
                <ul>
                    <li><a href="#about" >About Us</a></li>
                    <li><a href="#events">Events</a></li>
                    <li><a href="#announcements">Announcements</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#people">People</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;