import React from "react";
import Grid from "./GridBoxes";
import TasksList from "./TasksList";

const BoxColumn = props => (
    <div className="schedule__dayColumn">
        <Grid day={props.day} />
        <TasksList day={props.day} />
    </div>
);

export default BoxColumn;