import React from 'react';
import Button from "../../Components/Button";
import {useNavigate} from "react-router";

const SignUp = () => {
    const navigate = useNavigate();
    return (
        <form className="sign__form">
            <label className="sign__label">
                <svg width="19" height="19" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.5 10.5C13.4006 10.5 15.75 8.14406 15.75 5.25C15.75 2.34938 13.4006 0 10.5 0C7.59937 0 5.25 2.34938 5.25 5.25C5.25 8.14406 7.59937 10.5 10.5 10.5ZM10.5 13.125C7.00219 13.125 0 14.8772 0 18.375V21H21V18.375C21 14.8772 13.9978 13.125 10.5 13.125Z"
                        fill="#3152FF"/>
                </svg>
                <input placeholder="Nickname" type="text"/>
            </label>
            <label className="sign__label">
                <svg width="19" height="15" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18.833 0.166992H2.16634C1.0153 0.166992 0.0934245 1.09928 0.0934245 2.25033L0.0830078 14.7503C0.0830078 15.9014 1.0153 16.8337 2.16634 16.8337H18.833C19.9841 16.8337 20.9163 15.9014 20.9163 14.7503V2.25033C20.9163 1.09928 19.9841 0.166992 18.833 0.166992ZM18.833 4.33366L10.4997 9.54199L2.16634 4.33366V2.25033L10.4997 7.45866L18.833 2.25033V4.33366Z"
                        fill="#3C63E3"/>
                </svg>
                <input placeholder="Email" type="email"/>
            </label>
            <label className="sign__label">
                <svg width="15" height="19" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.7503 7.33366H13.7087V5.25033C13.7087 2.37533 11.3753 0.0419922 8.50032 0.0419922C5.62532 0.0419922 3.29199 2.37533 3.29199 5.25033V7.33366H2.25033C1.09928 7.33366 0.166992 8.26595 0.166992 9.41699V19.8337C0.166992 20.9847 1.09928 21.917 2.25033 21.917H14.7503C15.9014 21.917 16.8337 20.9847 16.8337 19.8337V9.41699C16.8337 8.26595 15.9014 7.33366 14.7503 7.33366ZM8.50032 16.7087C7.34928 16.7087 6.41699 15.7764 6.41699 14.6253C6.41699 13.4743 7.34928 12.542 8.50032 12.542C9.65137 12.542 10.5837 13.4743 10.5837 14.6253C10.5837 15.7764 9.65137 16.7087 8.50032 16.7087ZM11.7295 7.33366H5.27116V5.25033C5.27116 3.46908 6.71907 2.02116 8.50032 2.02116C10.2816 2.02116 11.7295 3.46908 11.7295 5.25033V7.33366Z"
                        fill="#3C63E3"/>
                </svg>
                <input placeholder="Пароль" type="password"/>
            </label>
            <label className="sign__label sign__label_last">
                <svg width="15" height="19" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.7503 7.33366H13.7087V5.25033C13.7087 2.37533 11.3753 0.0419922 8.50032 0.0419922C5.62532 0.0419922 3.29199 2.37533 3.29199 5.25033V7.33366H2.25033C1.09928 7.33366 0.166992 8.26595 0.166992 9.41699V19.8337C0.166992 20.9847 1.09928 21.917 2.25033 21.917H14.7503C15.9014 21.917 16.8337 20.9847 16.8337 19.8337V9.41699C16.8337 8.26595 15.9014 7.33366 14.7503 7.33366ZM8.50032 16.7087C7.34928 16.7087 6.41699 15.7764 6.41699 14.6253C6.41699 13.4743 7.34928 12.542 8.50032 12.542C9.65137 12.542 10.5837 13.4743 10.5837 14.6253C10.5837 15.7764 9.65137 16.7087 8.50032 16.7087ZM11.7295 7.33366H5.27116V5.25033C5.27116 3.46908 6.71907 2.02116 8.50032 2.02116C10.2816 2.02116 11.7295 3.46908 11.7295 5.25033V7.33366Z"
                        fill="#3C63E3"/>
                </svg>
                <input placeholder="Повторите пароль" type="password"/>
            </label>
            <p className="sign__how">Зарегистрироваться как:</p>
            <div className="sign__checkboxes">
                <label>
                    <input name="type" type="radio"/>
                    Фрилансер
                </label>
                <label>
                    <input name="type" type="radio"/>
                    Пользователь
                </label>
                <label>
                    <input name="type" type="radio"/>
                    Работодатель
                </label>
            </div>
            <Button action={() => navigate('/app')} text={"Зарегистрироваться"} type={3}/>
        </form>
    );
};

export default SignUp;