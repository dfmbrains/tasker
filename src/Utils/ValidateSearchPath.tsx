import React, {FC} from 'react';
import {useLocation, useNavigate} from "react-router";

interface IValidateSearchPath {
    children: React.ReactNode
}

const ValidateSearchPath: FC<IValidateSearchPath> = ({children}) => {
    const location = useLocation()
    const navigate = useNavigate()
    if (!location?.search) {
        navigate(-1)
    }
    return (
        <>
            {children}
        </>
    )
};

export default ValidateSearchPath;