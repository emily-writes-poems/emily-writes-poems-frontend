import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='container footer-style' align='center'>
            <hr />
            <h6 className="font-3 color-accent-2">Website by Emily Lau, 2021. Poem content and all text by Emily Lau, 2018-2021.</h6>
            <small className="font-3"><Link className='link-style' to='/terms_privacy'>Terms & Privacy</Link></small><br /><br />
            <small className="font-3 color-accent-2">Follow the development of this webapp on <a className="link-style" href="https://www.github.com/emily-writes-poems">Github</a>.</small>

        </div>
    );
}

export default Footer;
