import React from 'react';
import './Vacancies.scss';
import Search from "../../Assets/icons/search.svg";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Vacancies = () => {
    return (
        <main className="vacancies">
            <div className="container">
                <div className="vacancies__tools">
                    <h1 className="pageTitle">Вакансии</h1>
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
                <div className="vacancies__row">
                </div>
                <input type="radio"/>
            </div>
        </main>
    );
};

export default Vacancies;