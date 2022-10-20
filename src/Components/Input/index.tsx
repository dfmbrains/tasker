import React, {FC} from 'react';
import './input.scss';

interface IInput {
    placeholder: string,
    required: boolean
}

const Input: FC<IInput> = ({placeholder, required}) => {
    return (
        <input required={required} placeholder={placeholder} className="input" type="text"/>
    );
};

export default Input;