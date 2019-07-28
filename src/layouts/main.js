import React from "react";
import Days from '../components/DaysInfo';
import MainBoxes from "../components/MainBoxes";

const Main = () => {
    return (
        <div className="schedule">
            <Days />
            <MainBoxes />
        </div>
    );
}

export default Main;