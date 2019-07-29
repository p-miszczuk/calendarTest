import React from "react";
import BoxColumn from "./BoxColumn";

class DayColumn extends React.Component {

    state = {
        data: [
            {
                date: "06.07.2015",
                tasks: [
                    {id: 1, isTask: false, minute: 15},
                    {id: 2, isTask: false, minute: 15},
                    {id: 3, isTask: false, minute: 15},
                    {id: 4, isTask: false, minute: 15},
                    {id: 5, isTask: false, minute: 15},
                    {id: 6, isTask: false, minute: 15},
                    {id: 7, isTask: false, minute: 15},
                    {id: 8, isTask: false, minute: 15},
                    {id: 9, isTask: false, minute: 15},
                    {id: 10, isTask: false, minute: 15},
                    {id: 11, isTask: false, minute: 15},
                    {id: 12, isTask: false, minute: 15},
                    {id: 13, isTask: false, minute: 15},
                    {id: 14, isTask: false, minute: 15},
                    {id: 15, isTask: false, minute: 15},
                    {id: 16, isTask: false, minute: 15},
                    {id: 17, isTask: false, minute: 15},
                    {id: 18, isTask: false, minute: 15},
                    {id: 19, isTask: false, minute: 15},
                    {id: 20, isTask: false, minute: 15},
                    {id: 21, isTask: false, minute: 15},
                    {id: 22, isTask: false, minute: 15},
                    {id: 23, isTask: false, minute: 15},
                    {id: 24, isTask: false, minute: 15},
                    {id: 25, isTask: false, minute: 15},
                    {id: 26, isTask: false, minute: 15},
                    {id: 27, isTask: false, minute: 15},
                    {id: 28, isTask: false, minute: 15},
                    {id: 29, isTask: false, minute: 15},
                    {id: 30, isTask: false, minute: 15},
                    {id: 31, isTask: false, minute: 15},
                    {id: 32, isTask: false, minute: 15},
                    {id: 33, isTask: false, minute: 15},
                    {id: 34, isTask: false, minute: 15},
                    {id: 35, isTask: false, minute: 15},
                    {id: 36, isTask: false, minute: 15}
                ]
            },
            {
                date: "07.07.2015",
                tasks: [
                    {id: 1, isTask: false, minute: 15},
                    {id: 2, isTask: false, minute: 15},
                    {id: 3, isTask: false, minute: 15},
                    {id: 4, isTask: false, minute: 15},
                    {id: 5, isTask: false, minute: 15},
                    {id: 6, isTask: false, minute: 15}
                ]
            },
            {
                date: "08.07.2015",
                tasks: [
                    {id: 1, isTask: false, minute: 15},
                    {id: 2, isTask: false, minute: 15},
                    {id: 3, isTask: false, minute: 15},
                    {id: 4, isTask: false, minute: 15},
                    {id: 5, isTask: false, minute: 15},
                    {id: 6, isTask: false, minute: 15}
                ]
            },

        ]
    };

    handleEmptyTaskClick = (e,date,idItem) => {
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

        const box = document.createElement("div");
        const newTask = document.createElement("div");
        box.classList.add("newTask");
        newTask.classList.add("newTask__add");
        box.appendChild(newTask);
        document.querySelector("body").appendChild(box);
        
        console.log(e.clientX);
        console.log(date);
        console.log(idItem);
    }

    render() { 
        console.log(this.state.data)
        const tasks = this.state.data.map(item => (
            <BoxColumn key={item.date} 
                       day={item.date} 
                       tasks={item.tasks} 
                       click={(e,item,id) => this.handleEmptyTaskClick(e,item,id)} />
        ))

        return tasks;
    }
};

export default DayColumn;    