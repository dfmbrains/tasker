import React, {useEffect} from 'react';
import Header from "./Shared/Header";
import Footer from "./Shared/Footer/Footer";
import {Route, Routes, useLocation} from "react-router";
import Home from "./Pages/Home";
import SignLayout from "./Components/SignLoyout";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import HomeAbout from "./Pages/About";

function App() {
    const location = useLocation();
    useEffect(() => window.scrollTo(0, 0), [location.pathname]);

    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<HomeAbout/>}/>
                <Route path={"/"} element={<SignLayout/>}>
                    <Route path={"/login"} element={<SignIn/>}/>
                    <Route path={"/signup"} element={<SignUp/>}/>
                </Route>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
