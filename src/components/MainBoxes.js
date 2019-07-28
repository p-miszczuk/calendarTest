import React from "react";
import Houres from "./Houres";
import PlanBox from "./PlanBox";
import Timer from "./Timer";

const MainBoxes = () => {
    return (
        <div className="schedule__boxes">
            <Houres /> 
            <Timer />
            <PlanBox />
        </div>
    );
}

export default MainBoxes;