import React, {FC} from 'react';
import './button.scss';

interface IButton {
    text: string,
    type: number,
    children?: any,
    action?: any
    submit?: boolean
}

const ButtonTypes = (type: number) => {
    switch (type) {
        case 1:
            return 'button__transparent';
        case 2:
            return 'button__main';
        case 3:
            return 'button__big';
        case 4:
            return 'button__blue';
        case 5:
            return 'button__transparent-2';
        case 6:
            return 'button__blue_transparent';
        default:
            return ""
    }
}

const Button: FC<IButton> = ({text, type, children, action, submit}) => {
    return (
        <button type={submit ? "submit" : "button"} onClick={action}
                className={`button ${ButtonTypes(type)}`}>{children}{text}</button>
    );
};

export default Button;