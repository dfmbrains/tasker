import React from 'react';
import './myProfileFreelancer.scss';
import BaseProfileInfo from "../MyProfile/ProfileBaseInfo/BaseProfileInfo";
import MyProfileSettings from "../MyProfile/MyProfileSettings/MyProfileSettings";
import {dataJobs} from "./jobs/dataJobs";

import PortFolioCard from "../../Components/PortFolioCard/PortFolioCard";
import Reviews from "../../Components/Reviews/Reviews";
import ShowMoreBtn from "../../Components/ShowMoreButton/ShowMoreBtn";

const MyProfileFreelancer = () => {


    const profile = {
        username: 'Erbol Nurekov',
        number: '0709398298',
        contractType: 'Полный рабочий день',
        city: 'Bishkek',
        regDate: '12.02.2021',
        desc: "Привет, меня зовут Диас /tr В сфере дизайна с 2010 г. /tr С 2021 г. разработала более 1500 логотипов /tr    Хочешь привлечь внимание и создать запоминающийся образ бренда? /tr  Тогда тебе необходим уникальный логотип, ведь это – инвестиции в успех проекта! /tr  Спросишь, почему стоит заказать логотип именно у меня? /tr  ✔ Занимаю лидирующие позиции на KWORK /tr ✔ 4 варианта логотипа /tr  ✔ Разработка логотипа до полного утверждения /tr ✔ Количество правок и корректировок неограниченно /tr ✔ Всегда на связи, готова к плодотворному общению /tr ✔ Создаю логотип с нуля. Никаких шаблонов - только уникальность и креатив /tr ✔ Рада активному участию клиента в процессе /tr ✔ Объясняю свои решения и уважаю мнение клиента /tr ✔ Тебе понравится результат, серьёзно! /tr ✔ Форматы: EPS,PDF, PNG, Ai /tr 🎁 БОНУС К КАЖДОМУ ЗАКАЗУ /tr Черкните мне пару строк, если ищете дизайнера для своего нового проекта или хотите просто уютно пообщаться /tr  🔥 ДО 22.08.22 цены снижены на 30%. Успей забрать свою халяву! /tr"
    }

    return (
        <main className="myProfileFreelancer">
            <div className="container">
                <div className="myProfileFreelancer__main">
                    <div className='myProfileFreelancer__profile'>
                        <BaseProfileInfo data={profile}/>
                        <div className='myProfileFreelancer__profile_right'>
                            <h2 className="myProfileFreelancer__profile_right-name">
                                {profile.username}
                            </h2>
                            <h2 className="myProfileFreelancer__profile_right-role">
                                UI/UX Design
                            </h2>
                            <div className="myProfileFreelancer__profile_right-desc">
                                {profile.desc.split('/tr').map((item) => (
                                    <span>{item}<br/></span>
                                ))}
                            </div>
                        </div>
                        <MyProfileSettings stats={true} type={1}/>
                    </div>
                    <div className="myProfileFreelancer__portfolio">
                        <h2 className="myProfileFreelancer__portfolio_title">Portfolio</h2>
                        <div className="myProfileFreelancer__portfolio_works">
                            {dataJobs.map((work, idx) => (
                                <PortFolioCard idx={idx} work={work} key={idx}/>
                            ))}
                        </div>
                       <ShowMoreBtn/>
                        <Reviews username={'Erbol'}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MyProfileFreelancer;