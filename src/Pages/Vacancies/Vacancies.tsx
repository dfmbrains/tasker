import React from 'react';
import './Vacancies.scss';
import Search from "../../Assets/icons/search.svg";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import MarketPlaceAside from "../../Components/MarketPlaceAside/MarketPlaceAside";
import {radioData2} from "../../Utils/radioData";
import VacancyCard from "../../Components/VacancyCard/VacancyCard";
import MainListLayout from "../../Components/MainListLayout";

const VacanciesTools = () => {
    return (
        <div className="vacancies__tools">
            <h1 className="pageTitle">Вакансии</h1>
            <div className="vacancies__tools_form">
                <form className="searchBar">
                    <img className="searchBar__icon" src={Search} alt=""/>
                    <label>
                        <Input placeholder={"Услугу, исполнителя"}/>
                    </label>
                    <div className="searchBar__btn">
                        <Button text={"Найти"} type={4}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

const Vacancies = () => {
    return (
        <>
            <MainListLayout tools={<VacanciesTools/>}>
                <>
                    <MarketPlaceAside data={radioData2}/>
                    <div className="list">
                        {Array.from(Array(24).keys()).map((el: number) => (
                            <VacancyCard/>
                        ))}
                    </div>
                </>
            </MainListLayout>
        </>
    );
};

export default Vacancies;