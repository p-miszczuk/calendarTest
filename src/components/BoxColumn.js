import React from "react";
import Grid from "./GridBoxes";
import TasksList from "./TasksList";

const BoxColumn = props => {
    return (
        <div className="schedule__dayColumn">
            <Grid />
            <TasksList day={props.day}/>
        </div>
    );
}

export default BoxColumn;