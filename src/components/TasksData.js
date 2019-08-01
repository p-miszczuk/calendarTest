import React from "react";
import Task from "./TaskItem";


const Tasks = props => (
    props.task.map(item => (
        <Task key={item.id} 
              id={item.id} 
              isTask={item.isTask} 
              day={props.day} 
              minute={item.minute} 
              val = {item.val}
              title = {item.title}
              time={item.time}
              top={item.top}
              down={props.down} 
              />
    ))
)

export default Tasks;    