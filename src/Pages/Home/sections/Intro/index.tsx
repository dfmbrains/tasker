import React from 'react';
import './homeIntro.scss';
import Button from "../../../../Components/Button";

const HomeIntro = () => {
    return (
        <section className="homeIntro">
            <div className="container">
                <div className="homeIntro__info">
                    <h1 className="homeIntro__title">Биржа заработка в Интернете</h1>
                    <p className="homeIntro__subtitle">
                        на простых заданиях
                        <br/>
                        тысячи заданий с оплатой за деньги
                    </p>
                    <div className="homeIntro__button">
                        <Button text={"Начать сейчас"} type={false}/>
                    </div>
                </div>
                <div className="homeIntro__img">

                </div>
            </div>
        </section>
    );
};

export default HomeIntro;