import React from "react";
import RowDays from "./RowDays";

const DaysInfo = () => {
    return (
        <div className="schedule__topInfo">
            <div className="schedule__staticBox">
                <RowDays val="Uhrzeit"/>
            </div>
            <div className="schedule__daysBox">
                <RowDays val="Mo 06.07." />
                <RowDays val="Di 07.07." activeDay="true"/>
                <RowDays val="Mi 08.07." />
                <RowDays val="Do 09.07." />
                <RowDays val="Fr 10.07." />
                <RowDays val="Sa 11.07." weekend="true" />
                <RowDays val="Sa 12.07." weekend="true" />
            </div>
        </div>
    );
}

export default DaysInfo;