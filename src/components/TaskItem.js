import React from "react";
import classNames from 'classnames/bind';

const Task = props => {
    const { id,val,minute,time,title,day,top } = props;

    let height = "";
    let heightBox = 34; //15 minutes box hight
    Number(minute) === 15 ? height = 34+"px" : height = heightBox+35*minute/15-1; //others box height (69,104,139 ...)
    
    let event = "";

    if (val === "after") 
        event = "#d6ecff";
    else if (val === "before")
        event = "#93d7fb";
    else if (val === "now")
        event = "#fdd466";

    const styles = {
        top: top,
        height: height,
        backgroundColor: event
    }

    const className = classNames({
        schedule__iconSmile: true,
        iconhelp1: val === "after",
        iconhelp2: val !== "after"
    })
    
    const task =  (
        <div className={`schedule__task`} style={styles} onMouseDown={props.down}>
            {/* <p className="schedule__taskTime" onM>
            <time dateTime={time} >{time}</time>
            </p>
            <p className="schedule__taskText" onMouseDownCapture="false">{title}</p>
            <div className="schedule__additionalInfo" onMouseDownCapture="false" >
                {val === "now" ? <span className="schedule__mark">!</span> : ""}
                {(val === "after" || val === "now") ? <span className={className} role="img" aria-label="smile" onMouseDownCapture="false">&#128578;</span> : ""}
                {val === "before" ? <span className="schedule__iconClose">+</span> : ""}
            </div> */}
            asdasd
        </div>
    );

    return task;
}

export default Task;