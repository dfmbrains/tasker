import React, {useEffect} from 'react';
import MyProfileFreelancer from "../Freelancer/MyProfile/MyProfile";
import MyProfileBayer from "../Bayer/MyProfile";
import MyProfileEmployer from "../Employer/Bayer/MyProfile";
import BaseProfileInfo from "./ProfileBaseInfo/BaseProfileInfo";
import MyProfileSettings from "./MyProfileSettings/MyProfileSettings";
import {dataJobs} from "../Freelancer/MyProfile/imgs/dataJobs";
import PortFolioCard from "../../Components/PortFolioCard/PortFolioCard";
import ShowMoreBtn from "../../Components/ShowMoreButton/ShowMoreBtn";
import Reviews from "../../Components/Reviews/Reviews";

const MyProfile = () => {

    const profile = {
        role: 'employer',
        username: 'Erbol Nurekov',
        number: '0709398298',
        contractType: 'Полный рабочий день',
        city: 'Bishkek',
        regDate: '12.02.2021',
        desc: "Привет, меня зовут Диас /tr В сфере дизайна с 2010 г. /tr С 2021 г. разработала более 1500 логотипов /tr    Хочешь привлечь внимание и создать запоминающийся образ бренда? /tr  Тогда тебе необходим уникальный логотип, ведь это – инвестиции в успех проекта! /tr  Спросишь, почему стоит заказать логотип именно у меня? /tr  ✔ Занимаю лидирующие позиции на KWORK /tr ✔ 4 варианта логотипа /tr  ✔ Разработка логотипа до полного утверждения /tr ✔ Количество правок и корректировок неограниченно /tr ✔ Всегда на связи, готова к плодотворному общению /tr ✔ Создаю логотип с нуля. Никаких шаблонов - только уникальность и креатив /tr ✔ Рада активному участию клиента в процессе /tr ✔ Объясняю свои решения и уважаю мнение клиента /tr ✔ Тебе понравится результат, серьёзно! /tr ✔ Форматы: EPS,PDF, PNG, Ai /tr 🎁 БОНУС К КАЖДОМУ ЗАКАЗУ /tr Черкните мне пару строк, если ищете дизайнера для своего нового проекта или хотите просто уютно пообщаться /tr  🔥 ДО 22.08.22 цены снижены на 30%. Успей забрать свою халяву! /tr"
    }

    const RolesType = (role: string) => {
        switch (role) {
            case 'freelancer':
                return <MyProfileFreelancer data={profile}/>
            case 'bayer':
                return <MyProfileBayer/>
            case 'employer':
                return <MyProfileEmployer/>
            default:
                return ''
        }
    }

    const profileInfoType = () => {
        return profile.role === 'employer'
    }

    return (
        <main className="myProfile">
            <div className="container">
                <div className="myProfile__main">
                    <div className='myProfile__profile'>
                        <BaseProfileInfo type={profileInfoType()} data={profile}/>
                        <div className='myProfile__profile_right'>
                            <h2 className="myProfile__profile_right-name">
                                {profile.username}
                            </h2>
                            {RolesType(profile.role)}
                        </div>
                        <MyProfileSettings stats={true} type={1}/>
                    </div>
                    {profile.role === 'freelancer'
                        ? <div className="myProfile__portfolio">
                            <h2 className="myProfile__portfolio_title">Portfolio</h2>
                            <div className="myProfile__portfolio_works">
                                {dataJobs.map((work, idx) => (
                                    <PortFolioCard idx={idx} work={work} key={idx}/>
                                ))}
                            </div>
                            <ShowMoreBtn/>
                            <Reviews username={'Erbol'}/>
                        </div>
                        : ''
                    }
                </div>
            </div>
        </main>
    );
};

export default MyProfile;