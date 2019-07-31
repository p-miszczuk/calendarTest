import React from "react";
import classNames from 'classnames/bind';

const AddForm = props => {
    const task = classNames({
        'newTask': true,
        'newTask--display': props.display
    });
    
    return (
    <div className={task}>
        <form action="" onSubmit={props.submit}>
            <div>
                <input type="text" 
                    placeholder="title" 
                    name="title" 
                    value={props.title} 
                    onChange={(e) => props.changeText(e)}
                    className="newTask__title"
                    />
            </div>
            <div>
            <label htmlFor="date"> date: </label>
                <input type="date"
                    id="date" 
                    placeholder="title" 
                    name="data" 
                    value={props.date}
                    min="2015-07-06" 
                    max="2015-07-10"
                    onChange={(e) => props.changeDate(e)}
                    className="newTask__date" 
                    />
            </div>
            <div>
                <label htmlFor="hour"> hour: </label>
                <input type="text" 
                        list="hours" 
                        value={props.hour} 
                        id="hour" 
                        autoComplete="off" 
                        name="hour" 
                        className="newTask__hour"
                        onChange={(e) => props.changeText(e)}
                        />
                <datalist id="hours">
                    {
                        props.hours.map(item => <option key={item.hour} value={item.hour} />)
                    }
                </datalist>
                <label htmlFor="min"> time: </label>
                <input type="text" 
                        list="minutes" 
                        value={props.minutes} 
                        id="min" 
                        autoComplete="off" 
                        name="minutes" 
                        className="newTask__hour" 
                        onChange={(e) => props.changeText(e)}
                        />
                <datalist id="minutes">
                    <option value="15 min" />
                    <option value="30 min" />
                    <option value="45 min" />
                    <option value="60 min" />
                </datalist>
            </div>
            <div className="addTask__buttons">
                <button type="submit">Add</button> 
                <button type="button" onClick={props.close}>Close</button>
            </div>
        </form>
    </div>
)
}
    
export default AddForm;