import React from 'react';
import {Link} from "react-router-dom";

interface Interface {
    stats?: boolean
}

const Settings: React.FC<Interface> = ({stats}) => {
    return (
        <div className="settingButtons__settings">
            <label>
                <Link to={'/myProfile/settings'}>Настройки профиля</Link>
            </label>
            {stats ?
                <>
                    <h2>Фрилансер новичок</h2>
                    <div className="stats">
                        <span>256</span>
                        <span>Заказ выполнен</span>
                    </div>
                    <div className="stats">
                        <span>154</span>
                        <span>Отзывов получено</span>
                    </div>
                    <div className="stats">
                        <span>100%</span>
                        <span>Заказов успешно сдано</span>
                    </div>
                    <div className="stats">
                        <span>100%</span>
                        <span>Заказов сдано вовремя</span>
                    </div>
                </>
                : ''
            }
        </div>
    );
};

export default Settings;