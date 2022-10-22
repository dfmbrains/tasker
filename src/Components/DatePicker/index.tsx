import React from 'react';
import './datePicker.scss';

const DatePicker = () => {
    return (
        <label className="datePicker">
            <input
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => e.target.value ? '' : e.target.type = 'text'}
                placeholder={"С даты"} type="text"/>
            <span>-</span>
            <input
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => e.target.value ? '' : e.target.type = 'text'}
                placeholder={"По дату"} type="text"/>
        </label>
    );
};

export default DatePicker;