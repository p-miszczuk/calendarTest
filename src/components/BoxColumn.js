import React from "react";
import Grid from "./GridBoxes";
import TasksList from "./TasksList";

const BoxColumn = props => (
    <div className="schedule__dayColumn">
        <Grid day={props.day} />
        <TasksList task={props.tasks} day={props.day} click={(e,item,id) => props.click(e,item,id)} />
    </div>
);

export default BoxColumn;