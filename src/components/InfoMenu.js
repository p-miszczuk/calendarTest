import React from "react";
import RowDays from "./RowDays";

class DaysInfo extends React.Component {
    state = {
        actualDate: "07.07.2015",
        days: [
            {day : ""},
            {day : "Mo 06.07.", date: "06.07.2015"},
            {day : "Di 07.07.", date: "07.07.2015"},
            {day : "Mi 08.07.", date: "08.07.2015"},
            {day : "Do 09.07.", date: "09.07.2015"},
            {day : "Fr 10.07.", date: "10.07.2015"},
            {day : "Sa 11.07.", date: "11.07.2015", free: true}, 
            {day : "Sa 12.07.", date: "12.07.2015", free: true}
        ]        
    }

    render() {
        const day = this.state.days.map(item => (
            <RowDays key={item.day} val={item.day} date={item.date} activeDay={this.state.actualDate} />
        ));

        return (
            <div className="schedule__daysBox">{day}</div>
        );
    }
}

export default DaysInfo;