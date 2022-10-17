import React, {useState} from 'react';
import './MarketPlace.scss';
import dataService from "../../Components/ServiceCard/images/dataService";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";

const MarketPlace = () => {

    const [filterState, setFilterState] = useState(false)
    const services = dataService;

    return (
        <section className="MarketPlace">
            <div className="container">
                {
                    filterState
                        ? <aside></aside>
                        : ''
                }
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