import React from "react";

const Task = props => {
    const { isTask,val,minute,time,title } = props;
    const task = isTask ? (
        <div className={`schedule__task schedule__task--${minute} schedule__task--${val} `}>
            <p className="schedule__taskTime">
            <time dateTime={time}>{time}</time>
            </p>
            <p className="schedule__taskText">{title}</p>
            <div className="schedule__additionalInfo">
                {val === "now" ? <span className="schedule__mark">!</span> : ""}
                {(val === "after" || val === "now") ? <span className={`schedule__iconSmile ${val === "after" ? "iconhelp1" : "iconhelp2"}`} role="img" aria-label="smile">&#128578;</span> : ""}
                {val === "before" ? <span className="schedule__iconClose">+</span> : ""}
            </div>
        </div>
    ) : <div className={`schedule__free schedule__task--${minute}`}></div>;

    return task;
}

export default Task;