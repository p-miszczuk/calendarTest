import React from "react";
import BoxColumn from "./BoxColumn";

class DayColumn extends React.Component {

    state = {
        days: [
            {day: "06.07.2015"},
            {day: "07.07.2015"},
            {day: "08.07.2015"},
            {day: "09.07.2015"},
            {day: "10.07.2015"},
            {day: "11.07.2015"},
            {day: "12.07.2015"},
        ]
    }

    render() {

        return this.state.days.map(item => <BoxColumn day={item.day} />)
        
    }
};

export default DayColumn;    