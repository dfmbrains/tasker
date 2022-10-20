import React from 'react';
import './offers.scss';
import MarketPlaceAside from "../../Components/MarketPlaceAside/MarketPlaceAside";
import {radioData1, radioData2} from "../../Utils/radioData";
import MainListLayout from "../../Components/MainListLayout";
import OffersCard from "../../Components/OffersCard";

const Offers = () => {
    const data = [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0]
    return (
        <MainListLayout tools={<h1 className="pageTitle">Отклики на Вакансии</h1>}>
            <>
                <MarketPlaceAside data={[radioData1[0], radioData2[0], radioData1[1]]}/>
                <div className="list">
                    {data.map((el, idx) => (
                        <OffersCard status={el === 0 ? true : el === 1 ? false : 'pending'} id={idx}/>
                    ))}
                </div>
            </>
        </MainListLayout>
    );
};

export default Offers;