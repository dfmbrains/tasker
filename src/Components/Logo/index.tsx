import React from 'react';
import LogoType1 from "./LogoType1";
import LogoType2 from "./LogoType2";
import LogoType3 from "./LogoType3";

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
            case 3:
                return <LogoType3/>
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