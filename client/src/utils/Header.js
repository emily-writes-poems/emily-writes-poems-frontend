import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className='container mt-4' align='center'>
            <Link className='link-style' to='/'><h1 className='font-1'>Emily. Writes. Poems.</h1></Link>
            <h5 className="font-3 color-accent-2">a collection of my poems.</h5>
            <hr />
        </div>
    );
}

export default Header;
