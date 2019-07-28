import React from "react";
import Days from '../components/DaysInfo';
import MainBoxes from "../components/MainBoxes";
import Button from "../components/ButtonMore";

const Main = () => {
    return (
        <div className="schedule">
            <Days />
            <MainBoxes />
            <Button />
        </div>
    );
}

export default Main;