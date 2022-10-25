import React from 'react';
import MarketPlaceAside from "../../Components/MarketPlaceAside/MarketPlaceAside";
import {radioData1} from "../../Utils/radioData";
import MyTasksCard from "../../Components/MyTasksCard";
import './vacancyOffers.scss';
import PortFolioCard from "../../Components/PortFolioCard/PortFolioCard";
import CommentCard from "../../Components/commentCard/CommentCard";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import VacancyCard from "../../Components/VacancyCard/VacancyCard";
import TaskCard from "../../Components/TaskCard/TaskCard";

const VacancyOffers = () => {

    const arr = [1, 2, 3, 4, 5]

    return (
        <div className="vacancyOffers">
            <div className="container">
                <div className="vacancyOffers__main">
                    <MarketPlaceAside data={radioData1} cities={true}/>
                    <div className="vacancyOffers__main_row">
                        {arr.map((el, idx) => (
                            <TaskCard idx={idx}/>
                        ))}
                    </div>
                    <VacancyCard your={true} offer={false}/>
                </div>
            </div>
        </div>
    );
};

export default VacancyOffers;