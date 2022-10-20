import React from 'react';

const ThemeSettings = () => {
    return (
        <div className="settingButtons__themeSettings">
            <h2>Тема сайта</h2>
            <div className="settingButtons__themeSettings_radio">
                <label>
                    <input name='theme' type="radio"/>
                    Светлая
                </label>
                <label>
                    <input name='theme' type="radio"/>
                    Темная
                </label>
            </div>
        </div>
    );
};

export default ThemeSettings;