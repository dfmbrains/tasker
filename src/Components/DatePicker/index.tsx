import React from 'react';
import './datePicker.scss';

const DatePicker = () => {
    return (
        <label className="datePicker">
            <input placeholder={"С даты"} type="date"/>
            <span>-</span>
            <input placeholder={"По дату"} type="date"/>
        </label>
    );
};

export default DatePicker;