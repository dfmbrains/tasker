import React from 'react';
import '../../MyProfile/myProfile.scss'
import BaseProfileInfo from "../../MyProfile/ProfileBaseInfo/BaseProfileInfo";
import MyProfileSettings from "../../MyProfile/MyProfileSettings/MyProfileSettings";
import Button from "../../../Components/Button";

const MyProfileBayer = () => {
    const profile = {
        username: 'Erbol Nurekov',
        number: '0709398298',
        contractType: 'Полный рабочий день',
        city: 'Bishkek',
        regDate: '12.02.2021',
        desc: "Привет, меня зовут Диас /tr В сфере дизайна с 2010 г. /tr С 2021 г. разработала более 1500 логотипов /tr    Хочешь привлечь внимание и создать запоминающийся образ бренда? /tr  Тогда тебе необходим уникальный логотип, ведь это – инвестиции в успех проекта! /tr  Спросишь, почему стоит заказать логотип именно у меня? /tr  ✔ Занимаю лидирующие позиции на KWORK /tr ✔ 4 варианта логотипа /tr  ✔ Разработка логотипа до полного утверждения /tr ✔ Количество правок и корректировок неограниченно /tr ✔ Всегда на связи, готова к плодотворному общению /tr ✔ Создаю логотип с нуля. Никаких шаблонов - только уникальность и креатив /tr ✔ Рада активному участию клиента в процессе /tr ✔ Объясняю свои решения и уважаю мнение клиента /tr ✔ Тебе понравится результат, серьёзно! /tr ✔ Форматы: EPS,PDF, PNG, Ai /tr 🎁 БОНУС К КАЖДОМУ ЗАКАЗУ /tr Черкните мне пару строк, если ищете дизайнера для своего нового проекта или хотите просто уютно пообщаться /tr  🔥 ДО 22.08.22 цены снижены на 30%. Успей забрать свою халяву! /tr"
    }
    return (
        <main className="myProfile">
            <div className="container">
                <div className="myProfile__main">
                    <div className='myProfile__profile'>
                        <BaseProfileInfo data={profile}/>
                        <div className='myProfile__profile_right'>
                            <h2 className="myProfile__profile_right-name">
                                {profile.username}
                            </h2>
                            <div className="myProfile__profile_tasks">
                                <p>Мои заказы <span>0</span></p>
                            </div>
                            <div className="myProfile__profile_tasks myProfile__profile_box">
                                <p>Мои задания <span>0</span></p>
                                <Button text={"Создать здание"} type={6}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#3152FF"
                                              d="M8.83386 0.584218L7.16627 0.584218L7.16627 7.1662L0.584285 7.1662V8.8338L7.16627 8.8338L7.16627 15.4158L8.83386 15.4158L8.83386 8.8338H15.4158V7.1662H8.83386L8.83386 0.584218Z"/>
                                    </svg>
                                </Button>
                            </div>
                        </div>
                        <MyProfileSettings stats={true} type={1}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MyProfileBayer;