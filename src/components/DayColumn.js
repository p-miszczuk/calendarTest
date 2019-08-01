import React from "react";
import BoxColumn from "./BoxColumn";
import AddForm from "./AddTaskForm";

class DayColumn extends React.Component {

    state = {
        activeDate: "07.07.2015",
        actualHour: "13:00",
        title: "",
        hour: "",
        minutes: "15 min",
        date: "",
        checkMin: ["15","30","45","60"],
        displayForm: false,
        hours: [],
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
        const loop = 61;

        for (let i=0; i<loop; i++)
        {   
            if (hour.toFixed(2).length === 4)
                hourSave = "0" + (hour+jump).toFixed(2);
            else 
                hourSave = (hour+jump).toFixed(2)
            
            arr.push({hour: hourSave, pos})
            if (jump > 0.30) {jump = 0; hour +=1} else jump += 0.15;
            pos += 35;
        }
            
        return arr;
    }

    handleTaskClick = (e,id,day) => {

        const posY = e.nativeEvent.offsetY;
        const heightBox = e.target.offsetHeight;
        let hour = "";

        if (posY < heightBox/4) {
            hour = 6.00 + id;
        } else if (posY < heightBox/2) {
            hour = 6.15 + id;
        }
        else if (posY < heightBox/2 + heightBox/4) {
            hour = 6.30 + id;
        } else {
            hour = 6.45 + id;
        }
        
        if (hour.toFixed(2).length <= 4)
            hour = "0" + hour.toFixed(2);
        
        let date = day.split(".").reverse().join("-");
       
        this.setState({
            date,
            hour,
            displayForm: true
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

    addTime = (start, time) => {
        let now = new Date();
        now.setHours(start.split(".")[0]);
        now.setMinutes(start.split(".")[1]);
        now.setHours(now.getHours()+parseInt(time.split(".")[0]));
        now.setMinutes(now.getMinutes()+parseInt(time.split(".")[1]));
        return now.getHours() + "." + now.getMinutes();
    };

    handleSubmit = (e) => {
        e.preventDefault();
        
        const {date, title, minutes, hour, checkMin, activeDate, actualHour } = this.state;
        console.log(date)
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

                    if (day <= activeDate ) 
                        hour < actualHour ? event = "after" : event = "before";
                    else
                        event = "before";

                    const pos = this.state.hours.filter(item => item.hour === hour);

                    let time = Number(this.addTime(hour,`0.${min}`));
                    time.toFixed(2).length <= 4 ? time = `0${time.toFixed(2)}` : time = time.toFixed(2);
                    
                    const taskValues = {
                        id: maxId.toString(),
                        val: event,
                        minute: min,
                        title: title,
                        time: `${hour} - ${time}`,
                        top: `${pos[0].pos}px`
                    }
                    
                    const obj = {
                        date: day,
                        tasks: stateClone[0].tasks.concat(taskValues)
                    }

                    this.setState({
                        displayForm: false,
                        title: "",
                        hour: "",
                        minutes: "15 min",
                        date: "",
                        data: this.state.data.map(item => item.date === day ? obj : item)
                    });                
                }
            }
            else 
                alert("Check your minutes' field");
        }
        else 
            alert("Fill all fields");
    }

    handleClose = () => {
        this.setState({
            displayForm: false,
            title: "",
            hour: "",
            minutes: "15 min",
            date: "",
        })
    }

    componentDidMount() {
        const hours = this.createHoures();
        this.setState({
            hours
        })
    }

    top = 0;
    prevTop = 0;
    prevColumn = null;

    handleMosueDown = e => {
        e.preventDefault();

        this.prevTop = e.target.style.top;
        this.prevColumn = e.target.parentElement;
        
        e.target.style.position = "fixed";
        e.target.style.left = e.pageX-e.target.offsetWidth/2+"px";
        e.target.style.top = e.pageY-e.target.offsetHeight/2+"px";

        document.body.append(e.target);
        
    }

    handleMouseMove = e => {
        e.preventDefault();
        
        if (e.target.style.position === "fixed") {
            e.target.style.left = e.pageX-e.target.offsetWidth/2+"px";
            e.target.style.top = e.pageY-e.target.offsetHeight/2+"px";

            // get wrappers
            let columns = document.querySelectorAll(".gridBox");
           
            let box = null, 
                top = null, 
                left = null;
            
            columns.forEach(column => {
                box = column.getBoundingClientRect();
                top = Math.ceil(box.top);
                left = Math.ceil(box.left);
                
                if (e.pageX-e.target.offsetWidth/2  >= left - 10 && e.pageX-e.target.offsetWidth/2 + e.target.offsetWidth < left + column.offsetWidth + 10 && 
                    e.pageY-e.target.offsetHeight/2 >= top - 5 && e.pageY-e.target.offsetHeight/2 + e.target.offsetHeight-5 < top + column.offsetHeight + 5)
                    {
                        this.top = e.target.offsetTop - top;
                    }
            });
        }
    }

    handleMouseUp = e => {
        e.preventDefault();
        document.body.removeChild(e.target);

        const columns = document.querySelectorAll(".gridBox");
        let column = 0, left = 0, top = 0;

        const action = [...columns].find(item => {
            column = item.getBoundingClientRect();
            left = Math.ceil(column.left);
            top = Math.ceil(column.top);
            
            if (e.pageX-e.target.offsetWidth/2 > left -10 && e.pageX-e.target.offsetWidth/2 + e.target.offsetWidth < left + item.offsetWidth + 10
                && e.pageY-e.target.offsetHeight/2 >= top - 5 && e.pageY-e.target.offsetHeight/2 + e.target.offsetHeight-5 < top + item.offsetHeight + 5) {
                return item;
            }

            return false;  
        });

        typeof action === "object" ? this.setColumn(e, this.top, action) 
                                   : this.setColumn(e, Number(this.prevTop.slice(0,this.prevTop.length-2)), this.prevColumn);
    }

    setColumn = (e, topPos, target) => {
        const drop = this.state.hours.find(item => item.pos >= topPos);
        e.target.style.position = "absolute";
        e.target.style.top = drop.pos + "px";
        e.target.style.left = 0+"px";
        target.appendChild(e.target);
    }

    render() { 
       return (
            <React.Fragment>
            {
                this.state.data.map(item => (
                    <BoxColumn key={item.date} 
                               day={item.date}
                               activeDate={this.state.activeDate} 
                               tasks={item.tasks}
                               down={this.handleMosueDown}
                               move={this.handleMouseMove}
                               up={this.handleMouseUp}
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
                    date={this.state.date}
                    hours={this.state.hours} />
            </React.Fragment>
        );
    }
};

export default DayColumn;    