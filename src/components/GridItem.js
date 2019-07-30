import React from "react";

const GridItem = props=> (

<div onClick={(e) => props.click(e,props.elem,props.day)} 
                    className={`schedule__box schedule__box--time 
                    ${props.day === "07.07.2015" ? "schedule__activeDay" : ""}`}></div>);

export default GridItem;