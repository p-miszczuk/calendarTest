import React from "react";
import classNames from "classnames/bind";

const GridItem = props=> {

    const activeDate = props.day === props.activeDate;
    
    const box = classNames({
        "schedule__box": true,
        "schedule__box--time": true,
        "schedule__activeDay": activeDate
    })

return (
    <div onClick={(e) => props.click(e,props.elem,props.day)} 
         className={box}>
    </div>
    )
};

export default GridItem;