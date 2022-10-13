import React, {FC} from 'react';
import './button.scss';

interface IButton {
    text: string,
    type: boolean
}

const Button: FC<IButton> = ({text, type}) => {
    return (
        <button className={`button ${type ? 'button__transparent' : 'button__main'}`}>{text}</button>
    );
};

export default Button;