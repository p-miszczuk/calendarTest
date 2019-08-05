import React from "react";
import Tasks from "./TasksData";

const TasksList = props => <Tasks task={props.task} day={props.day} down={props.down} />;

export default TasksList;