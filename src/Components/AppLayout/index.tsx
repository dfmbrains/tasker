import React from 'react';
import HeaderPlatform from "../../Shared/HeaderPlatform";
import {Outlet} from "react-router";

const AppLayout = () => {
    return (
        <>
            <HeaderPlatform/>
            <Outlet/>
        </>
    );
};

export default AppLayout;