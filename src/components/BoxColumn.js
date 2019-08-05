import React from "react";
import Grid from "./GridBoxes";
import TasksList from "./TasksList";

const BoxColumn = props => (
    
    <div id={props.day} className="schedule__dayColumn gridBox">
        
        <Grid day={props.day} 
              activeDate={props.activeDate}
              click={(e,idItem,day) => props.click(e,idItem,day)} />
        <TasksList task={props.tasks} 
                   down={props.down}
                   day={props.day} />

    </div>
);

export default BoxColumn;