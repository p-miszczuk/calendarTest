import React from "react";

class AddForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hours: [],
            display: "block",
            title: "",
            hour: "12:00",
            minutes: "",
            date: "2015-07-07",
            checkMin: ["15","30","45","60"]
        }
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

    handleSubmit = (e,message) => {
        e.preventDefault();
        
        if (message === "close") 
            this.setState({display: "none"})
        else if (message === "send") {
            const {date, title, minutes, hour, checkMin } = this.state;

            if (date.length > 0 && title.length > 0 && minutes.length > 0 && hour.length > 0) {
                const min = minutes.substr(0,2);
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

                    this.setState({display: "none"});
                }
                else {
                    alert("Check your minutes' field");
                }
            }
            else 
                alert("Fill all fields");
        }
    }

    render() {
        return (
            <div className="newTask" style={{"display": this.state.display}}>
                <form action="" id="formSend">
                    <div>
                        <input type="text" 
                            placeholder="title" 
                            name="title" 
                            value={this.state.title} 
                            onChange={this.handleChange}
                            className="newTask__title"
                             />
                    </div>
                    <div>
                    <label htmlFor="date"> date: </label>
                        <input type="date"
                            id="date" 
                            placeholder="title" 
                            name="data" 
                            value={this.state.date}
                            min="2015-07-06" 
                            max="2015-07-10"
                            onChange={this.handleChangeDate}
                            className="newTask__date" 
                            />
                    </div>
                    <div>
                        <label htmlFor="hour"> hour: </label>
                        <input type="text" 
                                list="hours" 
                                value={this.state.hour} 
                                id="hour" 
                                autoComplete="off" 
                                name="hour" 
                                className="newTask__hour"
                                onChange={this.handleChange}
                                />
                        <datalist id="hours">
                            <option value="12:00" />
                            <option value="13:00" />
                            <option value="14:00" />
                            <option value="15:00" />
                            <option value="16:00" />
                        </datalist>
                        <label htmlFor="min"> time: </label>
                        <input type="text" 
                                list="minutes" 
                                value={this.state.minutes} 
                                id="min" 
                                autoComplete="off" 
                                name="minutes" 
                                className="newTask__hour" 
                                onChange={this.handleChange}
                                />
                        <datalist id="minutes">
                            <option value="15 min" />
                            <option value="30 min" />
                            <option value="45 min" />
                            <option value="60 min" />
                        </datalist>
                    </div>
                    <div className="addTask__buttons">
                        <button type="submit" onClick={e => this.handleSubmit(e,"send")}>Add</button> 
                        <button type="button" onClick={e=> this.handleSubmit(e,"close")}>Close</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default AddForm;