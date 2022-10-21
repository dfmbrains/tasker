import React, {FC, useRef} from 'react';
import './referralProgram.scss';

interface IReferralProgramBox {
    title: string,
    children: any
}

const ReferralProgramBox: FC<IReferralProgramBox> = ({title, children}) => {
    return (
        <main className="referralProgram__box referralProgram__table">
            <h2 className="referralProgram__title">
                {children}
                {title}
            </h2>
            <div className="referralProgram__table_content">
                <div className="referralProgram__table_tools">
                    <input placeholder={"Поиск"} className="referralProgram__table_description" type="text"/>
                    <label>
                        <input placeholder={"С даты"} type="date"/>
                        <span>-</span>
                        <input placeholder={"По дату"} type="date"/>
                    </label>
                    <p className="referralProgram__table_description referralProgram__table_tools-period">
                        За выбранный период:
                        <span>0, 0.00</span>
                    </p>
                </div>
                <div className="referralProgram__table_row">
                    <h5 className="referralProgram__table_subtitle">Пользователь</h5>
                    <h5 className="referralProgram__table_subtitle">
                        Дата регистрации
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#4C4866"
                                  d="M12.0955 0.766602L6.82545 6.03665L1.5554 0.766602C1.19993 0.411133 0.62207 0.411133 0.266601 0.766602C-0.0888672 1.12207 -0.0888672 1.69993 0.266601 2.0554L6.17832 7.96712C6.35697 8.14577 6.59212 8.23509 6.82545 8.23327C7.06061 8.23327 7.29394 8.14577 7.47259 7.96712L13.3843 2.0554C13.7398 1.69993 13.7398 1.12207 13.3843 0.766602C13.0288 0.411133 12.451 0.411133 12.0955 0.766602Z"/>
                        </svg>
                    </h5>
                    <h5 className="referralProgram__table_subtitle">Уровень</h5>
                    <h5 className="referralProgram__table_subtitle">Деньги</h5>
                </div>
            </div>
        </main>
    )
}

const ReferralProgram = () => {
    const inputRef: any = useRef()
    const copyLinkHandler = () => {
        console.log(inputRef.current.value)
        inputRef.current.select()
        document.execCommand("copy")
    }
    return (
        <main className="referralProgram">
            <div className="container">
                <h1 className="pageTitle">Партнерская программа</h1>
                <div className="referralProgram__content">
                    <div className="referralProgram__box">
                        <h2 className="referralProgram__title">
                            <svg width="20" height="10" viewBox="0 0 20 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill="#555555"
                                      d="M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z"/>
                            </svg>
                            Моя партнерская ссылка
                        </h2>
                        <div className="referralProgram__link">
                            <input className="referralProgram__text" ref={inputRef} value="Моя партнерская ссылка"
                                   type="text" readOnly={true}/>
                            <button onClick={copyLinkHandler}>
                                <svg width="17" height="20" viewBox="0 0 17 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#555555"
                                          d="M12.3327 0.833008H2.33268C1.41185 0.833008 0.666016 1.57884 0.666016 2.49967V14.1663H2.33268V2.49967H12.3327V0.833008ZM14.8327 4.16634H5.66602C4.74518 4.16634 3.99935 4.91217 3.99935 5.83301V17.4997C3.99935 18.4205 4.74518 19.1663 5.66602 19.1663H14.8327C15.7535 19.1663 16.4993 18.4205 16.4993 17.4997V5.83301C16.4993 4.91217 15.7535 4.16634 14.8327 4.16634ZM14.8327 17.4997H5.66602V5.83301H14.8327V17.4997Z"/>
                                </svg>
                            </button>
                        </div>
                        <p className="referralProgram__text referralProgram__bot">Вы можете использовать ссылки на любую
                            страницу сервиса.
                            Достаточно добавить персональный идентификатор ?ref=1486301. Например, тот кто перейдет по
                            ссылке https://taskpay.ru/?ref=1486301 и зарегистрируется будет так же записан за вами.</p>
                    </div>
                    <div className="referralProgram__row">
                        <div className="referralProgram__box referralProgram__stats">
                            <p className="referralProgram__stats_value">5%</p>
                            <p className="referralProgram__stats_title referralProgram__stats_title-yellow">Мой
                                процент</p>
                            <p className="referralProgram__text">Расчет процента</p>
                        </div>
                        <div className="referralProgram__box referralProgram__stats">
                            <p className="referralProgram__stats_value">0</p>
                            <p className="referralProgram__stats_title referralProgram__stats_title-blue">рефералов</p>
                            <p className="referralProgram__text">Список пользователей</p>
                        </div>
                        <div className="referralProgram__box referralProgram__stats">
                            <p className="referralProgram__stats_value">0</p>
                            <p className="referralProgram__stats_title referralProgram__stats_title-green">заработано</p>
                            <p className="referralProgram__text">Статистика</p>
                        </div>
                    </div>
                    <ReferralProgramBox title={"Ваши рефералы"}>
                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#555555"
                                  d="M13.6364 6.1816C15.1409 6.1816 16.3545 4.95887 16.3545 3.45432C16.3545 1.94978 15.1409 0.727051 13.6364 0.727051C12.1318 0.727051 10.9091 1.94978 10.9091 3.45432C10.9091 4.95887 12.1318 6.1816 13.6364 6.1816ZM6.36364 6.1816C7.86818 6.1816 9.08182 4.95887 9.08182 3.45432C9.08182 1.94978 7.86818 0.727051 6.36364 0.727051C4.85909 0.727051 3.63636 1.94978 3.63636 3.45432C3.63636 4.95887 4.85909 6.1816 6.36364 6.1816ZM6.36364 7.99978C4.24091 7.99978 0 9.06341 0 11.1816V13.4543H12.7273V11.1816C12.7273 9.06341 8.48636 7.99978 6.36364 7.99978ZM13.6364 7.99978C13.3727 7.99978 13.0773 8.01796 12.7591 8.04978C13.8136 8.80887 14.5455 9.8316 14.5455 11.1816V13.4543H20V11.1816C20 9.06341 15.7591 7.99978 13.6364 7.99978Z"/>
                        </svg>
                    </ReferralProgramBox>
                    <ReferralProgramBox title={"Статистика"}>
                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#555555"
                                  d="M20 0.333173H13.3333V2.5554H20V0.333173ZM20 13.6665V11.4443H0V13.6665H20ZM20 5.88873H6.66667V8.11095H20V5.88873Z"/>
                        </svg>
                    </ReferralProgramBox>
                </div>
            </div>
        </main>
    );
};

export default ReferralProgram;