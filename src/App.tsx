import React, {useEffect} from 'react';
import Header from "./Shared/Header";
import Footer from "./Shared/Footer/Footer";
import {Route, Routes, useLocation} from "react-router";
import Home from "./Pages/Home";
import SignLayout from "./Components/SignLoyout";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import HomeAbout from "./Pages/About";
import HeaderPlatform from "./Shared/HeaderPlatform";
import Details from "./Pages/Details";
import Marketplace from "./Pages/Marketplace";

function App() {
    const location = useLocation();
    useEffect(() => window.scrollTo(0, 0), [location.pathname]);

    return (
        <>
            {
                window.location.href.includes('platform')
                    ? <HeaderPlatform/>
                    : <Header/>
            }
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<HomeAbout/>}/>
                <Route path={"/"} element={<SignLayout/>}>
                    <Route path={"/login"} element={<SignIn/>}/>
                    <Route path={"/signup"} element={<SignUp/>}/>
                </Route>
                <Route path={"platform/marketplace"} element={<Marketplace/>}/>
                <Route path={"/platform/details/:id"} element={<Details/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
