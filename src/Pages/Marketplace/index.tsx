import React from 'react';
import './MarketPlace.scss';
import dataService from "../../Components/ServiceCard/images/dataService";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import MarketPlaceAside from "../../Components/MarketPlaceAside/MarketPlaceAside";
import {radioData1} from "../../Utils/radioData";

const MarketPlace = () => {

    const services = dataService;

    return (
        <section className="MarketPlace">
            <div className="container">
                <MarketPlaceAside data={radioData1}/>
                <div className="MarketPlace__main">
                    {services.map((item, idx) => (
                        <ServiceCard key={idx} obj={item}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarketPlace;