import React from "react";

const RowDays = props => (
    <div className={`schedule__box schedule__box--days ${props.activeDay ? "schedule__activeDay" : "" }
        ${props.free ? "schedule__box--free" : ""}`}>{props.val}</div>
);

export default RowDays;