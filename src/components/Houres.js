import React from "react";
import Hour from "./Hour";

const Houres = () => {
    return (
        <div className="schedule__hour">
            <Hour hour="06.00" />
            <Hour hour="07:00" />
            <Hour hour="08:00" />
            <Hour hour="09:00" />
            <Hour hour="10:00" />
            <Hour hour="11:00" />
            <Hour hour="12:00" />
            <Hour hour="13:00" />
            <Hour hour="14:00" />
            <Hour hour="15:00" />
            <Hour hour="16:00" />
            <Hour hour="17:00" />
            <Hour hour="18:00" />
            <Hour hour="19:00" />
            <Hour hour="20:00" />
        </div>
    );
}

export default Houres;