import React from "react";
import BoxColumn from "./BoxColumn";

class DayColumn extends React.Component {

    state = {
        data: [
            {
                date: "06.07.2015",
                tasks: [ 
                    // {
                    //     id: "1",
                    //     isTask: true,
                    //     val: "after",
                    //     minute: 15,
                    //     title: "Task 1",
                    //     time: "06:30",
                    //     top: "0px"
                    // }
                ]
            },
            {
                date: "07.07.2015",
                tasks: [ ]
            },
            {
                date: "08.07.2015",
                tasks: [ ]
            },
            {
                date: "09.07.2015",
                tasks: [ ]
            },
            {
                date: "10.07.2015",
                tasks: [ ]
            },
            {
                date: "11.07.2015",
                tasks: [ ]
            },
            {
                date: "12.07.2015",
                tasks: [ ]
            }

        ]
    };

    handleTaskClick = (e,id) => {
        // console.clear();
        // let stateClone = this.state.data;
        // stateClone.forEach(item => {
        //     if (item.date === date) {
        //         item.tasks[idItem-1].isTask = true;
        //         item.tasks[idItem-1].val = "before";
        //         item.tasks[idItem-1].title = "Task 1";
        //         item.tasks[idItem-1].time = "09:00 - 10:00";
        //     }
        // });
        // console.log(stateClone);
        // this.setState({
        //     data: stateClone
        // });

        const newTask = document.createElement("div");
        newTask.classList.add("newTask__add");
        newTask.style.top = e.nativeEvent.offsetY + "px";
        newTask.style.left = e.nativeEvent.offsetX + "px";
        document.querySelector(".schedule__wrapper").appendChild(newTask);
        console.log(e.nativeEvent.offsetY + " " + id);

    }

    render() { 
       
        const tasks = this.state.data.map(item => (
            <BoxColumn key={item.date} 
                       day={item.date} 
                       tasks={item.tasks} 
                       click={(e,idItem) => this.handleTaskClick(e,idItem)} />
        ))

        return tasks;
    }
};

export default DayColumn;    