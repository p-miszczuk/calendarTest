import React from "react";
import Houres from "./Houres";
import PlanBox from "./PlanBox";

const MainBoxes = () => {
    return (
        <div className="schedule__boxes">
            <Houres /> 
            <PlanBox />
        </div>
    );
}

export default MainBoxes;