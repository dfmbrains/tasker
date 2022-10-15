import React from 'react';
import LogoType1 from "./LogoType1";
import LogoType2 from "./LogoType2";

interface Props {
    props: number
}

const Logo: React.FC<Props> = ({props}) => {

    const typeReturn = (type: number) => {
        switch (type) {
            case 1:
                return <LogoType1/>
            case 2:
                return <LogoType2/>
        }
    }

    return (
        <>
            {
                typeReturn(props)
            }
        </>
    );
};

export default Logo;