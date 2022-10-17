import React, {FC} from 'react';
import './input.scss';

interface IInput {
    placeholder: string
}

const Input: FC<IInput> = ({placeholder}) => {
    return (
        <input placeholder={placeholder} className="input" type="text"/>
    );
};

export default Input;