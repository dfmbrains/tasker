import React from 'react';
import './homeIntro.scss';
import Button from "../../../../Components/Button";
import IntroImg from '../../../../Assets/img/homeIntro.png';
import {useRecoilState} from "recoil";
import {headerHeightState} from "../../../../Store/States";

const HomeIntro = () => {
    const [headerHeight] = useRecoilState(headerHeightState);
    return (
        <section style={{height: `calc(100vh - ${headerHeight}px)`}} className="homeIntro">
            <div className="container">
                <div className="homeIntro__info">
                    <h1 className="homeIntro__title">Биржа заработка в Интернете</h1>
                    <p className="homeIntro__subtitle">
                        на простых заданиях
                        <br/>
                        тысячи заданий с оплатой за деньги
                    </p>
                    <div className="homeIntro__button">
                        <Button text={"Начать сейчас"} type={3}/>
                    </div>
                </div>
                <div className="homeIntro__img">
                    <img src={IntroImg} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default HomeIntro;