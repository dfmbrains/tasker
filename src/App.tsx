import React, {useEffect} from 'react';
import Footer from "./Shared/Footer/Footer";
import {Route, Routes, useLocation} from "react-router";
import LandingLayout from "./Components/LandingLayout";
import Home from "./Pages/Landing/Home";
import HomeAbout from "./Pages/Landing/About";
import SignLayout from "./Components/SignLoyout";
import SignIn from "./Pages/Landing/SignIn";
import SignUp from "./Pages/Landing/SignUp";
import Details from "./Pages/Details";
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
import Balance from "./Pages/Balance";
import MyTasks from "./Pages/Freelancer/MyTasks";
import CreateTask from "./Pages/Freelancer/CreateTask";
import MarketPlaceDetails from "./Pages/MarketPlace/details";
import UserSettings from "./Pages/Settings";
import VacancyOffers from "./Pages/VacancyOffers";


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
                    </Route>w
                </Route>
                <Route path={"/"} element={<AppLayout/>}>
                    <Route path={'/category/:category'} element={<Categories/>}/>
                    <Route path={'/marketplace'} element={<MarketPlace/>}/>
                    <Route path={'/marketplace/:id'} element={<MarketPlaceDetails/>}/>
                    <Route path={"/category/:category/:id"} element={<Details type={true}/>}/>
                    <Route path={'/vacancies'} element={<Vacancies/>}/>
                    <Route path={"/vacancies/:id"} element={<Details type={false}/>}/>
                    <Route path={"/vacancyoffers/:id"} element={<VacancyOffers/>}/>
                    <Route path={'/offers'} element={<Offers/>}/>
                    <Route path={'/chat'} element={<Chat/>}/>
                    <Route path={'/chat/:id'} element={<Chat/>}/>
                    <Route path={'/myProfile'} element={<MyProfile/>}/>
                    <Route path={'/myProfile/settings'} element={<UserSettings/>}/>
                    <Route path={'/referral_program'} element={<ReferralProgram/>}/>
                    <Route path={'/statistics'} element={<Statistics/>}/>
                    <Route path={'/balance'} element={<Balance/>}/>
                    <Route path={'/my_tasks'} element={<MyTasks/>}/>
                    <Route path={'/create_task'} element={<CreateTask/>}/>
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
