import React from "react";
import RowDays from "./RowDays";

class DaysInfo extends React.Component {
    state = {
        days: [
            {day : ""},
            {day : "Mo 06.07."},
            {day : "Di 07.07.", activeDay: "true"},
            {day : "Mi 08.07."},
            {day : "Do 09.07."},
            {day : "Fr 10.07."},
            {day : "Sa 11.07.", free: "true"}, 
            {day : "Sa 12.07.", free: "true"}
        ]        
    }

    render() {
        const day = this.state.days.map(item => (
            <RowDays key={item.day} val={item.day} activeDay={item.activeDay} free={item.free} />
        ));

        return (
            <div className="schedule__daysBox">{day}</div>
        );
    }
}

export default DaysInfo;