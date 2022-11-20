import React, {FC} from 'react';
import './employerTypesModal.scss';
import CategorySelect from "../../CategorySelect";

interface IEmployerTypesModal {
    closeModal: any
}

const EmployerTypesModal: FC<IEmployerTypesModal> = ({closeModal}) => {
    const categoryList = [
        {
            title: 'Автомобильный бизнес',
            categories: ['Автозапчасти, шины', 'Автоконпомненты', 'Розничная торговля', 'Техническое ослуживание', 'Финансовые услуги']
        },
        {
            title: 'Гостиницы, рестораны, общепит',
            categories: ['Автозапчасти, шины', 'Автоконпомненты', 'Розничная торговля', 'Техническое ослуживание', 'Финансовые услуги']
        },
        {
            title: 'ЖКХ',
            categories: ['Автозапчасти, шины', 'Автоконпомненты', 'Розничная торговля', 'Техническое ослуживание', 'Финансовые услуги']
        },
        {
            title: 'Информационные технологии',
            categories: ['Автозапчасти, шины', 'Автоконпомненты', 'Розничная торговля', 'Техническое ослуживание', 'Финансовые услуги']
        },
        {
            title: 'Лесная промышленность',
            categories: ['Автозапчасти, шины', 'Автоконпомненты', 'Розничная торговля', 'Техническое ослуживание', 'Финансовые услуги']
        },
    ]

    return (
        <div className="employerTypesModal">
            <div onClick={closeModal} className="employerTypesModal__layout"/>
            <div className="employerTypesModal__window">
                <div className="employerTypesModal__close">
                    <svg onClick={closeModal} width="12" height="12" viewBox="0 0 20 20" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFFFFF"
                              d="M19.3337 2.54699L17.4537 0.666992L10.0003 8.12033L2.54699 0.666992L0.666992 2.54699L8.12033 10.0003L0.666992 17.4537L2.54699 19.3337L10.0003 11.8803L17.4537 19.3337L19.3337 17.4537L11.8803 10.0003L19.3337 2.54699Z"/>
                    </svg>
                </div>
                <input className="employerTypesModal__search" type="text" placeholder="Поиск отрасли"/>
                <div className="employerTypesModal__scroll">
                    <div className="employerTypesModal__list">
                        {categoryList
                            ? categoryList.map((c) => (
                                <CategorySelect category={c}/>
                            ))
                            : ''
                        }
                    </div>
                </div>
                <div className="employerTypesModal__buttons">
                    <button onClick={closeModal}>Отменить</button>
                    <button onClick={closeModal}>Выбрать</button>
                </div>
            </div>
        </div>
    );
};

export default EmployerTypesModal;