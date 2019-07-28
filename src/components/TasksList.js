import React from "react";
import Tasks from "./TasksData";
// import Task from "./TaskItem";

const TasksList = props => {
    return (
        <div className="schedule__tasks">
            <Tasks day={props.day}/>
        </div>
    );
}

export default TasksList;