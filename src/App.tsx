import React from 'react';
import Header from "./Shared/Header";
import Footer from "./Shared/Footer/Footer";
import {Route, Routes} from "react-router";
import Home from "./Pages/Home";
import SignLayout from "./Components/SignLoyout";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
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
