import React from "react";
import Hour from "./Hour";

class Hours extends React.Component {

    state = {hours: ["06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"] };

    render() {
        return (
            <div className="schedule__hour">
                {
                    this.state.hours.map(hour => <Hour hour={`${hour}:00`} />)
                }
            </div>
        );
    }
}

export default Hours;