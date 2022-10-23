import React from 'react';
import './searchFreelancer.scss';
import MainListLayout from "../../Components/MainListLayout";
import MarketPlaceAside from "../../Components/MarketPlaceAside/MarketPlaceAside";
import {radioData2} from "../../Utils/radioData";
import VacancyCard from "../../Components/VacancyCard/VacancyCard";
import {useLocation} from "react-router";

const SearchFreelancerTools = () => {
    const location = useLocation()
    return (
        <div className="searchFreelancer__tools">
            <h1 className="pageTitle">Результаты поиска “{location.search.replace("?", '')}”</h1>
            <p className="searchFreelancer__result">
                Найдено:
                <span> 1399 вакансий</span>
            </p>
        </div>
    )
}

const SearchFreelancer = () => {
    return (
        <MainListLayout tools={<SearchFreelancerTools/>}>
            <>
                <MarketPlaceAside data={radioData2} cities={true}/>
                <div className="list">
                    {Array.from(Array(16).keys()).map((el: number) => (
                        <VacancyCard offer={false}/>
                    ))}
                </div>
            </>
        </MainListLayout>
    );
};

export default SearchFreelancer;