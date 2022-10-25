import React from 'react';
import Button from "../../../../Components/Button";

const MyProfileEmployer = () => {

    return (
        <>
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
        </>
    );
};

export default MyProfileEmployer;