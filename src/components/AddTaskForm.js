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
                <select name="hour" onChange={(e) => props.changeText(e)} className="newTask__hour" value={props.hour} 
                        id="hour" >
                    {
                        props.hours.map(item => <option key={item.hour} value={item.hour} >{item.hour}</option>)
                    }
                </select>
                <label htmlFor="min"> time: </label>
                <select id="min" value={props.minutes} name="minutes" className="newTask__hour" onChange={(e) => props.changeText(e)}>
                    <option value="15 min" >15 min</option>
                    <option value="30 min" >30 min</option>
                    <option value="45 min" >45 min</option>
                    <option value="60 min" >60 min</option>
                </select>
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