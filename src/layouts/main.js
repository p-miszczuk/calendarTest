import React from "react";
import DaysInfo from '../components/InfoMenu';
import RowDays from "../components/RowDays";
import Hours from "../components/Hours";
import PlanBox from "../components/PlanBox";
import Timer from "../components/Timer";

const Main = () => (
    <div className="schedule__wrapper">
        <div className="schedule__staticBox">
            <RowDays val="Uhrzeit"/>
        </div>
        <div className="schedule">
            <DaysInfo />
            <Hours />
            <PlanBox />
            <Timer />
        </div>
    </div>
)

export default Main;