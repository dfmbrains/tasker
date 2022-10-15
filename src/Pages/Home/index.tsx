import React from 'react';
import HomeIntro from "./sections/Intro";
import HomeStart from "./sections/Start/HomeStart";
import HomeBenefits from "./sections/Benefits/HomeBenefits";

const Home = () => {
    return (
        <main>
            <HomeIntro/>
            <HomeStart/>
            <HomeBenefits/>
        </main>
    );
};

export default Home;