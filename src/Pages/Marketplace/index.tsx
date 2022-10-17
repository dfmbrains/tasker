import React from 'react';
import './MarketPlace.scss';
import dataService from "../../Components/ServiceCard/images/dataService";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import MarketPlaceAside from "../../Components/MarketPlaceAside/MarketPlaceAside";

const MarketPlace = () => {

    const services = dataService;

    return (
        <section className="MarketPlace">
            <div className="container">
                <MarketPlaceAside/>
                <div className="MarketPlace__main">
                    {services.map((item)=>(
                        <ServiceCard obj={item}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarketPlace;