import { useState, useEffect } from 'react';

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
