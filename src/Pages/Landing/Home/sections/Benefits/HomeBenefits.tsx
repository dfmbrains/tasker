import React from 'react';
import './HomeBenefits.scss';
import RocketIcon from './img/Rocket.png';
import User from './img/User.png';
import Statistic from './img/Statistic.png';
import Bell from './img/Bell.png';
import Compas from './img/Compas.png';
import HomeBenefitCard from "../../../../../Components/HomeBenefitCard/HomeBenefitCard";

const HomeBenefits = () => {

    const Benefits = [
        {
            title: 'Быстрый и удобный вывод',
            desc: 'Вы сможете зарабатывать несколько тысяч рублей в месяц, выполняя простые задания, которые не требуют серьезных навыков',
            image: RocketIcon
        },
        {
            title: 'Быстрый и удобный вывод',
            desc: 'Вы сможете зарабатывать несколько тысяч рублей в месяц, выполняя простые задания, которые не требуют серьезных навыков',
            image: RocketIcon
        },
        {
            title: 'Реферальная программа',
            desc: 'Вы сможете зарабатывать несколько тысяч рублей в месяц, выполняя простые задания, которые не требуют серьезных навыков',
            image: User
        },
        {
            title: 'Система рейтингов',
            desc: 'Вы сможете зарабатывать несколько тысяч рублей в месяц, выполняя простые задания, которые не требуют серьезных навыков',
            image: Statistic
        },
        {
            title: 'Выполнение по времени',
            desc: 'Вы сможете зарабатывать несколько тысяч рублей в месяц, выполняя простые задания, которые не требуют серьезных навыков',
            image: Bell
        },
        {
            title: 'Работы с зарубежными рынками',
            desc: 'Вы сможете зарабатывать несколько тысяч рублей в месяц, выполняя простые задания, которые не требуют серьезных навыков',
            image: Compas
        },
    ]

    return (
        <div className="HomeBenefits">
            <div className="container">
                <div className="HomeBenefits__main">
                    <h2 className="HomeBenefits__title">Преимущества</h2>
                    <div className="HomeBenefits__box">
                        {Benefits ?
                            Benefits.map((card, idx) => (
                                <HomeBenefitCard key={idx} data={card}/>
                            ))
                            : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBenefits;