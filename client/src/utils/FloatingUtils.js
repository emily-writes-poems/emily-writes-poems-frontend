import JumpToNavigation from './JumpToNavigation.js';
import ThemeSwitcher from './ThemeSwitcher.js';
import { useLocation } from 'react-router-dom';

const FloatingUtils = () => {

    return (
        <div className="floating-utils">
            {useLocation().pathname === '/' && <JumpToNavigation />}
            <ThemeSwitcher />
        </div>
    );
}

export default FloatingUtils;
