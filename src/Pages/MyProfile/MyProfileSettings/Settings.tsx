import React from 'react';

interface Interface {
    stats?: boolean
}

const Settings: React.FC<Interface> = ({stats}) => {
    return (
        <div className="settingButtons__settings">
            <label>
                <button>Настройки профиля</button>
            </label>
            {stats ?
                <>
                    <hr/>
                    <h2>Фрилансер новичок</h2>
                    <hr/>
                    <div className="stats">
                        <span>256</span>
                        <span>Заказ выполнен</span>
                    </div>
                    <hr/>
                    <div className="stats">
                        <span>154</span>
                        <span>Отзывов получено</span>
                    </div>
                    <hr/>
                    <div className="stats">
                        <span>100%%</span>
                        <span>Заказов успешно сдано</span>
                    </div>
                    <hr/>
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