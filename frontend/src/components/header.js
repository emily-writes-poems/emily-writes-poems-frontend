import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className='mt-4' align='center'>
            <Link className='link-style' to='/'><h1 className='font-2'>emily.writes.poems.</h1></Link>
            <h5 className="font-3 color-accent-2">a collection of my poems.</h5>
            <hr />
        </div>
    );
}

export default Header;
