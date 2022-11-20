import React, {useState} from 'react';
import './aboutMission.scss';
import MissionImg from './img/missonImg.png';

const AboutMission = () => {

    const [content, setContent] = useState(1);

    const switchs = (type: number) => {
        switch (type) {
            case content:
                return 'active'
            default:
                return ''
        }
    }

    const contentSwitch = (type: number) => {
        switch (type) {
            case 1:
                return
        }
    }

    return (
        <section className="aboutMission">
            <div className="container">
                <div className="aboutMission__top">
                    <h2 className="aboutMission__title">Для кого мы?</h2>
                    <nav className="aboutMission__nav">
                        <button className={`${switchs(1)}`}
                                type={"button"} onClick={() => setContent(1)}>Пользователь
                        </button>
                        <button className={`${switchs(2)}`}
                                type={"button"} onClick={() => setContent(2)}>Фрилансер
                        </button>
                        <button className={`${switchs(3)}`}
                                type={"button"} onClick={() => setContent(3)}>Работодатель
                        </button>
                    </nav>
                </div>
                <div className="aboutMission__content">
                    <div className="aboutMission__img">
                        <img src={MissionImg} alt=""/>
                    </div>
                    <div className="aboutMission__texts">
                        <h3 className="aboutMission__texts_title">Пользователь</h3>
                        <p className="aboutMission__texts_description">Пользователь — это физическое лицо, которое
                            выставляет собственные преимущественно онлайн задание для выполнения со стороны фрилансера.
                            Все что от Вас требуется:
                            <p> 1. Передать все нужные задачи.</p>
                            <p> 2. Составить техническое задание если так таковое необходимо.</p>
                            <p> 3. Действовать внутри нашей платформы, иначе мы не несем ответственности за Ваши
                                средства.</p>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMission;