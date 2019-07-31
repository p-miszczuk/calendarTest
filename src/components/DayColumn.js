import React from "react";
import BoxColumn from "./BoxColumn";
import AddForm from "./AddTaskForm";

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
        hours: null,
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

    createHoures = () => {
        let pos = 0;
        let hour = 6;
        let hourSave = "";
        let jump = 0;
        let arr = [];
        const loop = 56;

        for (let i=0; i<loop; i++)
        {   
            // console.log((hour+jump).toFixed(2) + " " + (pos));
            if (hour.toFixed(2).length === 4)
                hourSave = "0" + (hour+jump).toFixed(2);
            else 
                hourSave = (hour+jump).toFixed(2)
            
            arr.push({hour: hourSave, pos})
            if (jump >= 0.44) {jump = 0; hour +=1} else jump += 0.15;
            pos += 35;
        }
            
        return arr;
    }

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
                
                const day = date.split("-").reverse().join(".");
                let stateClone = this.state.data;
    
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

                    if (day <= actualDate ) 
                        hour < actualHour ? event = "after" : event = "before";
                    else
                        event = "before";

                    let endTime = Number(hour) + Number("0."+min);

                    const taskValues = {
                        id: maxId.toString(),
                        val: event,
                        minute: min,
                        title: title,
                        time: `${hour}-${endTime}`,
                        top: posElem
                    }

                    stateClone[0].tasks.push(taskValues);
                                       
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

    componentDidMount() {
        const hours = this.createHoures();
        this.setState({
            hours
        })
    }

    render() { 
        console.log(this.state.hours)
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