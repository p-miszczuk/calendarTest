import React from "react";
import Grid from "./GridBoxes";
import TasksList from "./TasksList";

const BoxColumn = props => (
    <div className="schedule__dayColumn">
        <Grid day={props.day} click={(e,idItem,day) => props.click(e,idItem,day)} />
        <TasksList task={props.tasks} />
    </div>
);

export default BoxColumn;