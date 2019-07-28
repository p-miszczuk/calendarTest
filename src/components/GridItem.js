import React from "react";

const GridItem = props=> <div className={`schedule__box schedule__box--time ${props.day === "07.07.2015" ? "schedule__activeDay" : ""}`}></div>;

export default GridItem;