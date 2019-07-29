import React from "react";
import Tasks from "./TasksData";

const TasksList = props => (
    <div className="schedule__tasks">
        <Tasks task={props.task} 
               day={props.day} 
               click={(e,item,id) => props.click(e,item,id)} />
    </div>
);

export default TasksList;