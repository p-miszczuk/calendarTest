import React from "react";
import Grid from "./GridBoxes";
import TasksList from "./TasksList";

const BoxColumn = props => (
    
    <div className="schedule__dayColumn">
        
        <Grid day={props.day} 
              activeDate={props.activeDate}
              click={(e,idItem,day) => props.click(e,idItem,day)} />
        <TasksList task={props.tasks} 
                   down={props.down}
                   move={props.move} />

    </div>
);

export default BoxColumn;