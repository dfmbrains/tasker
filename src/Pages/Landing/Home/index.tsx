import React from 'react';
import HomeIntro from "./sections/Intro";
import HomeStart from "./sections/Start/HomeStart";
import HomeBenefits from "./sections/Benefits/HomeBenefits";
import HomeBusiness from "./sections/Business/HomeBusiness";

const Home = () => {
    return (
        <main>
            <HomeIntro/>
            <HomeStart/>
            <HomeBenefits/>
            <HomeBusiness/>
        </main>
    );
};

export default Home;