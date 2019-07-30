import React from "react";

class AddForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hours: [],
            title: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="newTask" style={{"display": "block"}}>
                <form action="" id="newTask">
                    <div>
                        <input type="text" 
                            placeholder="title" 
                            name="title" 
                            value={this.state.title} 
                            onChange={this.handleChange}
                            className="newTask__title"/>
                    </div>
                    <div>
                        <label htmlFor="hour"> hour: </label>
                        <input type="text" list="hours" id="hour" name="hour" className="newTask__hour"/>
                        <datalist id="hours">
                            <option value="12:00" />
                            <option value="13:00" />
                            <option value="14:00" />
                            <option value="15:00" />
                            <option value="16:00" />
                        </datalist>
                        <label htmlFor="min"> time: </label>
                        <input type="text" list="minuts" id="min" name="minuts" className="newTask__hour"/>
                        <datalist id="minuts">
                            <option value="15 min" />
                            <option value="30 min" />
                            <option value="45 min" />
                            <option value="60 min" />
                        </datalist>
                    </div>
                </form>
            </div>
        );
    }
};

export default AddForm;