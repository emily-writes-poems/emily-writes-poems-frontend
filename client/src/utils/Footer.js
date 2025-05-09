import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='container my-4 pb-2' align='center'>
            <hr />
            <h6 className="font-3 color-accent-2 pt-2">Website by Emily Lau, 2025. Poem content and all text by Emily Lau, 2018-2025.</h6>
            <p className="small font-3 color-accent-2">Follow the development of this webapp on <a className="link-style" href="https://www.github.com/emily-writes-poems">Github</a>.</p>
            <p className="small font-3"><Link className='link-style' to='/terms_privacy'>Terms & Privacy</Link></p>
        </div>
    );
}

export default Footer;
