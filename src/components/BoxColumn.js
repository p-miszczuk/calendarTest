import React from "react";
import Grid from "./GridBoxes";
import TasksList from "./TasksList";

const BoxColumn = props => (
    <div className="schedule__dayColumn">
        {/* {console.log(props)} */}
        <Grid day={props.day} click={(e,idItem) => props.click(e,idItem)} />
        {/* <TasksList task={props.tasks} /> */}
    </div>
);

export default BoxColumn;