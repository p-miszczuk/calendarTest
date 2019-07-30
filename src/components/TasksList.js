import React from "react";
import Tasks from "./TasksData";

const TasksList = props => (
    <div className="schedule__tasks">
        <Tasks task={props.task} day={props.day} /> 
    </div>
);

export default TasksList;