import React, {useEffect} from 'react';
import Footer from "./Shared/Footer/Footer";
import {Route, Routes, useLocation} from "react-router";
import Home from "./Pages/Home";
import SignLayout from "./Components/SignLoyout";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import HomeAbout from "./Pages/About";
import Details from "./Pages/Details";
import Marketplace from "./Pages/Marketplace";
import LandingLayout from "./Components/LandingLayout";
import AppLayout from "./Components/AppLayout";

function App() {
    const location = useLocation();
    useEffect(() => window.scrollTo(0, 0), [location.pathname]);

    return (
        <>
            <Routes>
                <Route path={"/"} element={<LandingLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"/about"} element={<HomeAbout/>}/>
                    <Route path={"/"} element={<SignLayout/>}>
                        <Route path={"/login"} element={<SignIn/>}/>
                        <Route path={"/signup"} element={<SignUp/>}/>
                    </Route>
                </Route>
                <Route path={"/app"} element={<AppLayout/>}>
                    <Route index element={<Marketplace/>}/>
                    <Route path={"details/:id"} element={<Details/>}/>
                </Route>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
