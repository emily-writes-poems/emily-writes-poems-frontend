import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useLocalStorage(key, initial_value) {
    const [value, set_value] = useState(() => {
        const persisted_value = localStorage.getItem(key);
        return persisted_value !== null ? persisted_value : initial_value;
    });

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);

    return [value, set_value]
}

export function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [location]);

    return null;
}
