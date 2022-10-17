import React, {FC} from 'react';
import './button.scss';

interface IButton {
    text: string,
    type: number,
    children?: any
}

const ButtonTypes = (type: number) => {
    switch (type) {
        case 1:
            return 'button__transparent'
        case 2:
            return 'button__main'
        case 3:
            return 'button__big'
        case 4:
            return 'button__blue'
        default:
            return ""
    }
}

const Button: FC<IButton> = ({text, type, children}) => {
    return (
        <button className={`button ${ButtonTypes(type)}`}>{children}{text}</button>
    );
};

export default Button;