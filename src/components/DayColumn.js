import React from "react";
import BoxColumn from "./BoxColumn";

const DayColumn = () => {
    return (
        <React.Fragment>
            <BoxColumn day="06.07.2015" />
            <BoxColumn day="07.07.2015" /> 
            <BoxColumn day="08.07.2015" />
            <BoxColumn day="09.07.2015" />
            <BoxColumn day="10.07.2015" /> 
            <BoxColumn day="11.07.2015" />
            <BoxColumn day="12.07.2015" />
        </React.Fragment>
    );
}

export default DayColumn;