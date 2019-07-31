import React from "react";
import classNames from "classnames/bind"

const RowDays = props => {

    const activeDay = props.date === props.activeDay && props.date !== undefined;
   
    const box = classNames({
        "schedule__box": true,
        "schedule__box--days": true,
        "schedule__activeDay" : activeDay,
        "schedule__box--free" : false
    })

    return(
        <div className={box}>{props.val}</div>
    )
}
    


export default RowDays;