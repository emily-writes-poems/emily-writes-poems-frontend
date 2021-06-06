import React, { useState, useEffect } from 'react';

function useLocalStorage(key, initial_value) {
    const [value, set_value] = useState(() => {
        const persisted_value = localStorage.getItem(key);
        return persisted_value !== null ? persisted_value : initial_value;
    });

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);

    return [value, set_value]
}

const ThemeSwitcher = () => {
    const [mode, set_mode] = useLocalStorage('mode', 'day');

    useEffect(() => {
        document.body.className = mode;
    }, [mode]);

    function toggle() {
        set_mode(localStorage.getItem('mode') === 'day' ? 'night' : 'day');
    }

    return (
        <div className="theme-switcher">
            <i className="material-icons md-36" onClick={toggle}>brightness_4</i>
        </div>
    );
}

export default ThemeSwitcher;
