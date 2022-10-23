import React, {useState} from 'react';
import SettingsSecond from "./SettingsSecond";
import ThirdSettings from "./ThirdSettings";

const SettingsFirst = () => {

    const [page, setPage] = useState(1)

    const switchSettings = (num: number) => {
        switch (num) {
            case 1:
                return <SettingsFirst/>
            case 2:
                return <SettingsSecond/>
            case 3:
                return <ThirdSettings/>
            default:
                return <SettingsFirst/>
        }
    }

    return (
        <div className="Settings">
            <div className="container">
                <div className="Settings__main">
                    {switchSettings(page)}
                </div>
            </div>
        </div>
    );
};

export default SettingsFirst;