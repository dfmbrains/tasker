import React from 'react';
import './MarketPlace.scss';
import dataService from "../../Components/ServiceCard/images/dataService";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import MarketPlaceAside from "../../Components/MarketPlaceAside/MarketPlaceAside";
import {radioData1} from "../../Utils/radioData";
import MainListLayout from "../../Components/MainListLayout";

const MarketPlace = () => {
    const services = dataService;
    return (
        <MainListLayout tools={<h1 className="pageTitle">Дизайн Логотипов</h1>}>
            <>
                <MarketPlaceAside cities={false} data={radioData1}/>
                <div className="list">
                    {services.map((item, idx) => (
                        <ServiceCard key={idx} obj={item}/>
                    ))}
                </div>
            </>
        </MainListLayout>
    );
};

export default MarketPlace;