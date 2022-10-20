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
import Vacancies from "./Pages/Vacancies/Vacancies";
import Offers from "./Pages/Offers";
import Chat from "./Pages/Chat/Chat";
import SearchFreelancer from "./Pages/SearchFreelancer";
import ValidateSearchPath from "./Utils/ValidateSearchPath";

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
                <Route path={"/"} element={<AppLayout/>}>
                    <Route path={'/category/:category'} element={<Marketplace/>}/>
                    <Route path={"/category/:category/:id"} element={<Details/>}/>
                    <Route path={'/projects'} element={<Vacancies/>}/>
                    <Route path={'/offers'} element={<Offers/>}/>
                    <Route path={'/chat'} element={<Chat/>}/>
                    <Route path={'/chat/:id'} element={<Chat/>}/>
                    <Route path={'/search'} element={
                        <ValidateSearchPath>
                            <SearchFreelancer/>
                        </ValidateSearchPath>
                    }/>
                </Route>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
