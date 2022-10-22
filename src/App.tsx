import React, {useEffect} from 'react';
import Footer from "./Shared/Footer/Footer";
import {Route, Routes, useLocation} from "react-router";
import Home from "./Pages/Home";
import SignLayout from "./Components/SignLoyout";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import HomeAbout from "./Pages/About";
import Details from "./Pages/Details";
import LandingLayout from "./Components/LandingLayout";
import AppLayout from "./Components/AppLayout";
import Vacancies from "./Pages/Vacancies/Vacancies";
import Offers from "./Pages/Offers";
import Chat from "./Pages/Chat/Chat";
import MyProfile from "./Pages/MyProfile/MyProfile";
import ValidateSearchPath from './Utils/ValidateSearchPath';
import SearchFreelancer from './Pages/SearchFreelancer';
import ReferralProgram from "./Pages/ReferralProgram";
import Statistics from "./Pages/Statistics";
import Categories from "./Pages/Categories";
import MarketPlace from "./Pages/MarketPlace";


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
                    <Route path={'/category/:category'} element={<Categories/>}/>
                    <Route path={'/marketplace'} element={<MarketPlace/>}/>
                    <Route path={"/category/:category/:id"} element={<Details type={true}/>}/>
                    <Route path={'/vacancies'} element={<Vacancies/>}/>
                    <Route path={"/vacancies/:id"} element={<Details type={false}/>}/>
                    <Route path={'/offers'} element={<Offers/>}/>
                    <Route path={'/chat'} element={<Chat/>}/>
                    <Route path={'/chat/:id'} element={<Chat/>}/>
                    <Route path={'/myProfile'} element={<MyProfile/>}/>
                    <Route path={'/referral_program'} element={<ReferralProgram/>}/>
                    <Route path={'/statistics'} element={<Statistics/>}/>
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
