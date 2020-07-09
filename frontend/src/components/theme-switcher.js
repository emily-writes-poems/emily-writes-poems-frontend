import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ThemeSwitcher(props){
    return(
        <div className="theme-switcher">
            <FontAwesomeIcon className='light-mode' size='lg' icon='sun' onClick={props.onClickFunction}/>

            <FontAwesomeIcon className='dark-mode' size='lg' icon='moon' onClick={props.onClickFunction}/>
        </div>
    );
}

export default ThemeSwitcher;
