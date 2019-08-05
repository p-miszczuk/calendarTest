import React from "react";
import BoxColumn from "./BoxColumn";
import AddForm from "./AddTaskForm";

class DayColumn extends React.Component {

    state = {
        columns: [],
        activeDate: "07.07.2015",
        actualHour: "13:00",
        title: "",
        hour: "",
        minutes: "15 min",
        date: "",
        checkMin: ["15","30","45","60"],
        displayForm: false,
        prevColumn: null,
        top: 0,
        prevTop: 0,
        hours: [],
        moveTask: null,
        shift: [],
        data: [
            {
                date: "06.07.2015",
                tasks: [ 
                    {
                        id: "1",
                        val: "after",
                        minute: 15,
                        title: "Task 1",
                        time: "06:00 - 06.15",
                        top: "0px"
                    },
                    {
                        id: "3",
                        val: "after",
                        minute: 30,
                        title: "Task 2",
                        time: "07.00 - 07.30",
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

    clone = null;

    createHoures = () => {
        let pos = 0;
        let hour = 6;
        let hourSave = "";
        let jump = 0;
        let arr = [];
        const loop = 60;

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

    maxID = (data, len) => {
        if (len === 0) return 1;
        
        let maxid = data.tasks.map(task => task.id);
        return Number(maxid.sort().reverse()[0]) + 1;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        const {date, title, minutes, hour, checkMin, activeDate, actualHour } = this.state;
       
        if (date.length > 0 && title.length > 0 && minutes.length > 0 && hour.length > 0) {
            
            const min = minutes.substr(0,2);
            const check = checkMin.filter(item => item === min);
            
            if (check.length > 0) {
                
                const day = date.split("-").reverse().join(".");
                let stateClone = this.state.data;
    
           
                stateClone = stateClone.filter(item => item.date === day)
                
                let maxId = this.maxID(stateClone[0],stateClone[0].tasks.length);

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
        const columns = document.querySelectorAll(".gridBox");
        this.setState({
            hours,
            columns
        })
    }

    handleMosueDown = e => {
        e.preventDefault();
        e.stopPropagation();
        
        // if task
        if (e.target.className === "schedule__task" ) {
            console.log("jest")
            
            let shift = [];
            shift[0] = e.clientX - Math.ceil(e.target.getBoundingClientRect().left);
            shift[1] = e.clientY - Math.floor(e.target.getBoundingClientRect().top);
            
            this.clone = document.createElement("div");
           
            let cloneTask = e.target.cloneNode(true);
            this.clone.appendChild(cloneTask);
            cloneTask.style.top = "0px";            
        
            this.clone.style.position = "fixed";
            this.clone.style.top = e.pageY - shift[1] +"px";
            this.clone.style.left = e.pageX - shift[0] +"px";
            this.clone.style.width = e.target.offsetWidth + "px";
            this.clone.style.height = e.target.offsetHeight + "px";
            this.clone.style.zIndex = "99999";
            this.clone.onmousemove = this.handleMouseMove;
            this.clone.onmouseup = this.handleMouseUp;
        
            document.body.appendChild(this.clone)
            const prevColumn = e.target.parentNode;
            let columnDate = e.target.parentNode.id;    
            let moveTask = null;

            let prevTop = e.target.style.top; //with px!!

            this.setState({
                data: this.state.data.map(item => {
                    if (item.date === columnDate)
                    {
                        return {date: columnDate, tasks: item.tasks.filter(task => {
                            if (task.id !== e.target.id) 
                                return task
                            else
                                moveTask = task
                        }) }
                    }
                    return item
                }),
                moveTask,
                prevColumn,
                prevTop,
                shift
            });       
        }
    }

    handleMouseMove = e => {
        e.preventDefault();
        e.stopPropagation();
        
        if (this.clone.style.position === "fixed") {
            
            const shift = this.state.shift;
            this.clone.style.left = e.pageX-shift[0]+"px";
            this.clone.style.top = e.pageY-shift[1]+"px";
                  
            let box = null, 
                top = null, 
                left = null;
            
            this.state.columns.forEach(column => {
                box = column.getBoundingClientRect();
                top = Math.ceil(box.top);
                left = Math.ceil(box.left);
                
                if (e.pageX - shift[0] >= left - 10 && e.pageX - shift[0]+ e.target.offsetWidth < left + column.offsetWidth + 10 && 
                    e.pageY - shift[1] >= top - 5   && e.pageY - shift[1] + e.target.offsetHeight-5 < top + column.offsetHeight + 5)
                {   
                    this.setState({
                       top: e.target.parentNode.offsetTop - top 
                    })                    
                }
            });
        }
    }

    handleMouseUp = e => {
        e.preventDefault();
        e.stopPropagation();
        
        if (e.target.className === "schedule__task") {
            
            const shift = this.state.shift;
            let column = 0, left = 0, top = 0;

            const action = [...this.state.columns].find(item => {
                column = item.getBoundingClientRect();
                left = Math.ceil(column.left);
                top = Math.ceil(column.top);
                
                if (e.pageX - shift[0] > left -10 && e.pageX - shift[0] + e.target.offsetWidth  < left + item.offsetWidth + 10 && 
                    e.pageY - shift[1] > top - 5  && e.pageY - shift[1] + e.target.offsetHeight < top + item.offsetHeight + 5) {
                    
                    return item;  
                }
            });

            typeof action === "object" ? this.setColumn(e, this.state.top, action) : this.setColumn(e, this.state.prevTop.slice(0,this.state.prevTop.length-2), this.state.prevColumn);
        }
    }

    setHours = (hour,minute) => {

        let secHour = Number(`${this.addTime(hour, `0.${minute}`)}`);
        secHour = secHour.toFixed(2).length <= 4 ? `0${secHour.toFixed(2)}` : secHour.toFixed(2); 
        return `${hour} - ${secHour}`;
    }

    setColumn = (e, topPos, target) => {
        
        const { data, moveTask, activeDate, actualHour, hours } = this.state;
        // const prevDay = e.target.children[3].innerHTML;
        const dataClone = data.filter(item => item.date === target.id)
        let maxId = this.maxID(dataClone[0],dataClone[0].tasks.length);
       
        let taskMove = moveTask;
        const drop = hours.find(item => item.pos > topPos - 25)

        let event = null;
        if (target.id <= activeDate) 
            drop.hour < actualHour ? event = "after" : event = "before";
        else
            event = "before";

        taskMove.top = drop.pos + "px";
        taskMove.time = this.setHours(drop.hour, "0"+taskMove.minute);
        taskMove.id = maxId.toString();
        taskMove.val = event;

        this.setState({
            data: this.state.data.map(data => {
                if (data.date === target.id) {
                    return {
                        date: data.date, tasks: [...data.tasks, taskMove]
                    }
                }
                return data
            })
        });

        document.body.removeChild(e.target.parentNode)
        
    }

    render() { 
       return (
        <div className="schedule__plan">
        {
            this.state.data.map(item => (
                <BoxColumn key={item.date} 
                           day={item.date}
                           activeDate={this.state.activeDate} 
                           tasks={item.tasks}
                           down={this.handleMosueDown}
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
           
        </div>
        );
    }
};

export default DayColumn;