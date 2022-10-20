import React from 'react';
import Settings from "./Settings";
import ThemeSettings from "./themeSettings";
import './MyProfileSettings.scss';

interface Interface {
    type: number,
    stats?: boolean
}

const MyProfileSettings: React.FC<Interface> = ({type, stats}) => {

    const SettingButtons = (type: number) => {
        switch (type) {
            case 1:
                return <>
                    <Settings stats={stats}/>
                    <ThemeSettings/>
                </>
            case 2:
                return <ThemeSettings/>

            case 3:
                return <Settings stats={stats}/>
        }
    }

    return (
        <div className='settingButtons'>
            {SettingButtons(type)}
        </div>
    );
};

export default MyProfileSettings;