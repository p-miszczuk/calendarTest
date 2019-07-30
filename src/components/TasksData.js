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
              />
    ))
)

export default Tasks;

// if (props.day === "06.07.2015")
//         return (
//             <React.Fragment>
//                 <Task isTask={false} minute="60" />
//                 <Task isTask={false} minute="60" />
//                 <Task isTask={false} minute="30" />
//                 <Task isTask={true} minute="45" val="after" title="Task 1" time="08.30 - 09.15" />
//                 <Task isTask={true} minute="15" val="after" title="Task 2" time="09.15 - 09.30" />
//                 <Task isTask={false} minute="30" />
//                 <Task isTask={true} minute="45" val="after" title="Task 3" time="10.00 - 10.45" />
//                 <Task isTask={true} minute="45" val="after" title="Task 4" time="10.45 - 11.15" />
//                 <Task isTask={false} minute="60" />
//                 <Task isTask={true} minute="45" val="after" title="Task 5" time="12.15 - 13.00" />
//                 <Task isTask={true} minute="30" val="after" title="Task 6" time="13.00 - 13.30" />
//             </React.Fragment>
//         );
//     else if (props.day === "07.07.2015") 
//         return (
//             <React.Fragment>
//                 <Task isTask={false} minute="60" />
//                 <Task isTask={false} minute="60" />
//                 <Task isTask={true} minute="15" val="after" title="Task 1" time="08.00 - 08.15" />
//                 <Task isTask={true} minute="30" val="after" title="Task 2" time="08.15 - 08.45" />
//                 <Task isTask={true} minute="45" val="after" title="Task 3" time="08.45 - 09.15" />
//                 <Task isTask={false} minute="60" />
//                 <Task isTask={true} minute="30" val="now" title="Task 4" time="10.15 - 10.45" />
//                 <Task isTask={false} minute="60" />
//                 <Task isTask={true} minute="45" val="before" title="Task 5" time="11.45 - 12.30" />
//                 <Task isTask={false} minute="30" />
//                 <Task isTask={true} minute="30" val="before" title="Task 6" time="13.00 - 13.30" />
//             </React.Fragment>
//         );
//     else if (props.day === "08.07.2015")
//      return (
//             <React.Fragment>
//                 <Task isTask={false} minute="60" />
//                 <Task isTask={true} minute="45" val="before" title="Task 1" time="07.00 - 08.45" />
//                 <Task isTask={false} minute="45" />
//                 <Task isTask={true} minute="30" val="before" title="Task 2" time="08.15 - 08.45" />
//                 <Task isTask={false} minute="15" />
//                 <Task isTask={true} minute="15" val="before" title="Task 3" time="09.00 - 09.15" />
//                 <Task isTask={false} minute="60" />
//                 <Task isTask={true} minute="30" val="before" title="Task 4" time="10.15 - 10.45" />
//                 <Task isTask={false} minute="15" />
//                 <Task isTask={true} minute="45" val="before" title="Task 5" time="11.00 - 12.45" />
//                 <Task isTask={false} minute="30" />
//                 <Task isTask={true} minute="30" val="before" title="Task 6" time="13.15 - 13.45" />
//             </React.Fragment>
//         );
    