import React from 'react';
import Button from "../../../Components/Button";
import './thirdSettings.scss';
import Visa from '../../../Assets/img/visa.png';
import Qiwi from '../../../Assets/img/qiwi.png';
import Webmoney from '../../../Assets/img/webMoney.png';
import Umoney from '../../../Assets/img/umoney.png';

const ThirdSettings = () => {
    return (
        <div className="thirdSettings">
            <div className="thirdSettings__numberPhone">
                <h2>Подтвердите номер телефона, чтобы добавить реквизиты</h2>
                <span>В целях обеспечения безопасности аккаунта, добавление или изменение реквизитов доступно только после подтверждения по номеру телефона.</span>
                <Button text={'Привязать номер телефона'} type={4}/>
            </div>
            <label>
                <h2>Кошелек WebMoney</h2>
                <div className="inputRow">
                    <img src={Webmoney} alt=""/>
                    <input type="text"/>
                </div>
            </label>
            <label>
                <h2>Кошелек Qiwi</h2>
                <div className="inputRow">
                    <img src={Qiwi} alt=""/>
                    <input type="text"/>
                </div>
            </label>
            <label>
                <h2>Кошелек ЮMoney</h2>
                <div className="inputRow">
                    <img src={Umoney} alt=""/>
                    <input type="text"/>
                </div>
            </label>
            <label>
                <h2> Банковская карта</h2>
                <div className="inputRow">
                    <img src={Visa} alt=""/>
                    <input type="text"/>
                </div>
            </label>

        </div>
    );
};

export default ThirdSettings;