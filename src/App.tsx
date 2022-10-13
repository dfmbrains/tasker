import React from 'react';
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import {Route, Routes} from "react-router";
import Home from "./Pages/Home";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
