import React from "react";
import CalendarIconn from "../images/CalendarIcon";

const Nav = () => (
    <div className="header__nav">
        <div className="header__dateChange">
            <div className="header__arrowDate header__arrowDate--left" id="prev"> </div>
            <div className="header__days">6 - 12. Juli 2015</div>
            <div className="header__arrowDate header__arrowDate--right" id="next"></div>
        </div>
        <div className="header__iconCalendar">
            <CalendarIconn />
        </div>
    </div>
);


export default Nav;