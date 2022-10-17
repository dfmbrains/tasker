import React from 'react';
import Header from "../../Shared/Header";
import {Outlet} from "react-router";

const LandingLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default LandingLayout;