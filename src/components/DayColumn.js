import React from "react";
import BoxColumn from "./BoxColumn";
import AddForm from "./AddTaskForm";
import { isTSExpressionWithTypeArguments } from "@babel/types";

class DayColumn extends React.Component {

    state = {
        hours: [],
        title: "",
        hour: "12:00",
        minutes: "",
        date: "2015-07-07",
        checkMin: ["15","30","45","60"],
        displayForm: "none",
        posElem: "",
        data: [
            {
                date: "06.07.2015",
                tasks: [ 
                    {
                        id: "1",
                        val: "after",
                        minute: 15,
                        title: "Task 1",
                        time: "06:30",
                        top: "0px"
                    },
                    {
                        id: "3",
                        val: "after",
                        minute: 30,
                        title: "Task 2",
                        time: "06:30",
                        top: "140px"
                    }
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

    handleTaskClick = (e,id,day) => {
        
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

        const posY = e.nativeEvent.offsetY;
        const heightBox = e.target.offsetHeight;
        let posElem = this.state.posElem;

        if (posY < heightBox/4) {
            posElem = 0 + heightBox * id +"px";
        } else if (posY < heightBox/2) {
            posElem = 35 + heightBox * id +"px";
        }
        else if (posY < heightBox/2 + heightBox/4) {
            posElem = 70 + heightBox * id +"px";
        } else
            posElem = 105 + heightBox * id +"px";

        // console.clear();
       
        // let stateClone = this.state.data;
        // stateClone.map(item => {
        //     if (item.date === day)
        //         item.tasks[0].top = posElem;
        //     return null
        //  });
        // console.log(this.state.displayForm)
         this.setState({
             posElem,
             displayForm: "block"
         })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChangeDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        const {date, title, minutes, hour, checkMin } = this.state;
        
        if (date.length > 0 && title.length > 0 && minutes.length > 0 && hour.length > 0) {
            const min = minutes.substr(0,2);console.log("jest");
            const check = checkMin.filter(item => item === min);
            if (check.length > 0) {
                let taskValues = [
                    {
                        date: date,
                        title: title,
                        minutes: minutes,
                        hour: hour
                    }
                ]

                this.setState({displayForm: "none"});
            }
            else {
                alert("Check your minutes' field");
            }
        }
        else 
            alert("Fill all fields");
    }

    handleClose = () => {
        this.setState({
            displayForm: "none"
        })
    }

    render() { 
       return (
            <React.Fragment>
            {
                this.state.data.map(item => (
                    <BoxColumn key={item.date} 
                               day={item.date} 
                               tasks={item.tasks} 
                               click={(e,idItem,day) => this.handleTaskClick(e,idItem,day)} />
                ))
            }
            <AddForm display={this.state.displayForm} 
                    changeText = {(e) => this.handleChange(e)} 
                    changeDate = {(e) => this.handleChangeDate(e)}
                    submit = {(e) => this.handleSubmit(e)}
                    close = {this.handleClose}
                    title={this.state.title} 
                    hour={this.state.hour}
                    minutes={this.state.minutes}
                    date={this.state.date} />
            </React.Fragment>
        );
    }
};

export default DayColumn;    