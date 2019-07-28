import React from "react";
import { NONAME } from "dns";

const TasksList = props => {
    return (
        <div className="schedule__tasks">
            <Tasks />
        </div>
    );
}

const Tasks = props => {
    return (
        <React.Fragment>
            <Task task="false" minute="60" />
            <Task task="false" minute="60" />
            <Task task="false" minute="30" />
            <Task task="true" minute="45" after="true" title="Task 1" time="08.30 - 09.15" now="false" />
            <Task task="true" minute="15" after="true" title="Task 2" time="09.15 - 09.30" now="false" />
            <Task task="false" minute="30" />
            <Task task="true" minute="45" after="true" title="Task 3" time="10.00 - 10.45" now="false" />
            <Task task="true" minute="45" after="true" title="Task 4" time="10.45 - 11.15" now="false" />
            <Task task="false" minute="60" />
            <Task task="true" minute="45" after="true" title="Task 5" time="12.15 - 13.00" now="false" />
            <Task task="true" minute="30" after="true" title="Task 5" time="13.00 - 13.30" now="false" />
        </React.Fragment>
    );
}

const Task = props => {

    const task = props.task ? (
        <div className={`schedule__task schedule__task--${props.minute} ${props.after ? "schedule__task--after" : ""} `}>
            <p className="schedule__taskTime">
            <time datetime={props.time}>{props.time}</time>
            </p>
            <p className="schedule__taskText">{props.title}</p>
            <div className="schedule__additionalInfo">
                {props.now ? <span className="schedule__mark">!</span> : ""}
                {props.after ? <span className="schedule__iconSmile iconhelp1" role="img" aria-label="smile">&#128578;</span> : ""}
                {!props.after ? <span className="schedule__iconClose">+</span> : ""}
            </div>
        </div>
    ) : <div className={`schedule__free schedule__task--${props.minute}`}></div>;

    return task;
}

export default TasksList;