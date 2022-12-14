import React, {FC, useEffect} from 'react';
import {useLocation, useNavigate} from "react-router";

interface IValidateSearchPath {
    children: React.ReactNode
}

const ValidateSearchPath: FC<IValidateSearchPath> = ({children}) => {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (!location?.search) {
            navigate(-1)
        }
    }, [])
    if (!location?.search) return (<></>)
    return (
        <>
            {children}
        </>
    )
};

export default ValidateSearchPath;