import React, {useState} from 'react';
import './aboutMission.scss';
import MissionImg from './img/missonImg.png';
import User from "./User";
import Freelancer from "./Freelancer";
import JobGiver from "./JobGiver";

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
                return <User/>
            case 2:
                return <Freelancer/>
            case 3:
                return <JobGiver/>
            default:
                return <User/>
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
                    {
                        contentSwitch(content)
                    }
                </div>
            </div>
        </section>
    );
};

export default AboutMission;