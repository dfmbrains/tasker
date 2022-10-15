import React, {useState} from 'react';
import './aboutMission.scss';
import MissionImg from './img/missonImg.png';

const AboutMission = () => {
    const [content, setContent] = useState(1);
    return (
        <section className="aboutMission">
            <div className="container">
                <div className="aboutMission__top">
                    <h2 className="aboutMission__title">Для кого мы?</h2>
                    <nav className="aboutMission__nav">
                        <button className={`${content === 1 ? 'active' : ''}`}
                            type={"button"} onClick={() => setContent(1)}>Пользователь
                        </button>
                        <button className={`${content === 2 ? 'active' : ''}`}
                            type={"button"} onClick={() => setContent(2)}>Фрилансер
                        </button>
                        <button className={`${content === 3 ? 'active' : ''}`}
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
                        <p className="aboutMission__texts_description">С другой стороны, и осуждать, и регулярное
                            членство - это все, что касается нас, мы знаем, что удовольствие деленити и испорчено теми
                            болями, которые они ослеплены желанием, а не предвидеть, подобно тому, как в culpa qui
                            используются услуги потенциальной пластичности ума, который является мумтаз махал из
                            faciliste</p>
                        <p className="aboutMission__texts_description">С другой стороны, и осуждать, и регулярное
                            членство - это все, что касается нас, мы знаем, что удовольствие деленити и испорчено теми
                            болями, которые они ослеплены желанием, а не предвидеть, подобно тому, как в culpa qui
                            используются услуги потенциальной пластичности ума, который является мумтаз махал из
                            faciliste</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMission;