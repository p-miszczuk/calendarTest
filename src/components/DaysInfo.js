import React from "react";

const Days = () => {
    return (
        <div class="schedule__topInfo">
            <div class="schedule__staticBox">
                <div class="schedule__box schedule__box--days">Uhrzeit</div>
            </div>
            <div class="schedule__daysBox">
                <div class="schedule__box schedule__box--days">Mo 06.07.</div>
                <div class="schedule__box schedule__box--days schedule__activeDay">Di 07.07.</div>
                <div class="schedule__box schedule__box--days">Mi 08.07.</div>
                <div class="schedule__box schedule__box--days">Do 09.07.</div>
                <div class="schedule__box schedule__box--days">Fr 10.07.</div>
                <div class="schedule__box schedule__box--days schedule__box--weekend">Sa 11.07.</div>
                <div class="schedule__box schedule__box--days schedule__box--weekend">Sa 12.07.</div>
            </div>
        </div>
    );
}

export default Days;