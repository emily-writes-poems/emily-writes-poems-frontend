import React, { useEffect } from 'react';
import { useLocalStorage } from '../utils/Utils';

const ThemeSwitcher = () => {
    const [mode, set_mode] = useLocalStorage('mode', 'day');

    useEffect(() => {
        // set page styling
        document.body.className = mode;

        //set favicon
        let favicon = document.getElementById('favicon');
        if(localStorage.getItem('mode') === 'night') {
            favicon.setAttribute('href', "/favicon_dark.ico");
        } else {
            favicon.setAttribute('href', "/favicon.ico");
        }
    }, [mode]);

    function toggle() {
        set_mode(localStorage.getItem('mode') === 'day' ? 'night' : 'day');
    }

    return (
        <div className="theme-switcher">
            <i className="material-icons" onClick={toggle}>brightness_4</i>
        </div>
    );
}

export default ThemeSwitcher;
