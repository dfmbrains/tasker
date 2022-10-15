import React, {FC} from 'react';
import './button.scss';

interface IButton {
    text: string,
    type: number
}

const ButtonTypes = (type: number)=>{
    switch (type){
        case 1:
            return 'button__transparent'
        case 2:
            return 'button__main'
        case 3:
            return 'button__big'
        default:
            return ""
    }
}

const Button: FC<IButton> = ({text, type}) => {
    return (
        <button className={`button ${ButtonTypes(type)}`}>{text}</button>
    );
};

export default Button;