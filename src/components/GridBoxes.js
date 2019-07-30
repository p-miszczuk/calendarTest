import React from "react";
import GridItem from "./GridItem";

const Grid = props => [...Array(15)].map((item,i) => <GridItem key={i} day={props.day} elem={i} click={(e,idItem) => props.click(e,idItem)} />)

export default Grid;
            