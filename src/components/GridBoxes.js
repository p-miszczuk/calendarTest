import React from "react";
import GridItem from "./GridItem";

const Grid = props => (
    [...Array(15)].map((item,i) => (
        <GridItem key={i} 
                  day={props.day}
                  activeDate={props.activeDate} 
                  elem={i} 
                  click={(e,idItem,day) => props.click(e,idItem,day)} />))
);

export default Grid;
            