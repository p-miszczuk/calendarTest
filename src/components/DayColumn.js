import React from "react";
import BoxColumn from "./BoxColumn";
import AddForm from "./AddTaskForm";
import { isTSExpressionWithTypeArguments } from "@babel/types";

class DayColumn extends React.Component {

    state = {
        actualDate: "07.07.2015",
        actualHour: "13:00",
        title: "",
        hour: "",
        minutes: "",
        date: "",
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

        const posY = e.nativeEvent.offsetY;
        const heightBox = e.target.offsetHeight;
        let posElem = this.state.posElem;
        let hour = "";

        if (posY < heightBox/4) {
            posElem = 0 + heightBox * id +"px";
            hour = 6.00 + id;
        } else if (posY < heightBox/2) {
            posElem = 35 + heightBox * id +"px";
            hour = 6.15 + id;
        }
        else if (posY < heightBox/2 + heightBox/4) {
            posElem = 70 + heightBox * id +"px";
            hour = 6.30 + id;
        } else {
            posElem = 105 + heightBox * id +"px";
            hour = 6.45 + id;
        }
        
        if (hour.toFixed(2).length === 4)
            hour = "0" + hour.toFixed(2);
        
        let date = day.split(".").reverse().join("-");
       
        this.setState({
            date,
            posElem,
            hour,
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
        
        const {date, title, minutes, hour, checkMin, actualDate, actualHour, posElem } = this.state;
        
        if (date.length > 0 && title.length > 0 && minutes.length > 0 && hour.length > 0) {
            const min = minutes.substr(0,2);
            
            const check = checkMin.filter(item => item === min);
            
            if (check.length > 0) {
                let day = date.split("-").reverse().join(".");
                let stateClone = this.state.data;
    
                console.clear();
                let maxId = 0;
                stateClone = stateClone.filter(item => item.date === day)
                let tasks = stateClone[0].tasks.length;
                
                if (tasks === 0) 
                    maxId = 1;
                else {
                    maxId = stateClone[0].tasks.map(item => item.id);
                    maxId = maxId.sort().reverse()[0];
                    maxId = Number(maxId) + 1;
                } 

                if (maxId > 0) {
                    
                    let event = "";

                    (day < actualDate && hour < actualHour) ? event = "after" : event = "before";
                    let endTime = Number(hour) + Number("0."+min);
                    let taskValues = {
                        id: maxId.toString(),
                        val: event,
                        minute: min,
                        title: title,
                        time: `${hour}-${endTime}`,
                        top: posElem
                    }
                    stateClone[0].tasks.push(taskValues);
                   
                    console.log(stateClone);                    
                }

                // this.setState({displayForm: "none"});
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