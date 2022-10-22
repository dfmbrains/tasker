import React from 'react';
import MarketPlaceAside from "../../Components/MarketPlaceAside/MarketPlaceAside";
import {radioData1} from "../../Utils/radioData";
import './MarketPlace.scss';
import TaskCard from "../../Components/TaskCard/TaskCard";
import MainListLayout from "../../Components/MainListLayout";

const Index = () => {

    const arr = [1, 2, 3, 4, 5];

    return (
        <MainListLayout tools={<h1 className="pageTitle">Дизайн Логотипов</h1>}>
            <MarketPlaceAside data={radioData1} cities={false}/>
            <div className="MarketPlace__main_cards">
                {arr.map((el, idx)=>(
                    <TaskCard idx={idx}/>
                ))}
            </div>
        </MainListLayout>
    );
};

export default Index;