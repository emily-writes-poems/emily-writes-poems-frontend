import React from 'react';

import { Helmet } from 'react-helmet';


const TermsPrivacy = () => {
    return (
        <div>
            <Helmet>
                <title>Terms & Privacy | Emily Writes Poems</title>
            </Helmet>

            <div className='container font-2'>
                <h3 className='color-accent-1 my-4'>Terms & Privacy</h3>
            </div>

            <div className='container font-3 mt-5'>
                <h5 className="font-2 color-accent-1">Introduction.</h5>
                <p>Welcome to Emily Writes Poems! This page outlines general guidelines for using the site and information about privacy. These terms apply to all visitors. By visiting and using the site, you are agreeing to these terms.</p>
                <p>Emily Writes Poems is a website for my original writing. All poem text and related content, including statistics and descriptions, are written and maintained by Emily Lau.</p>
                <p>Contact at <span className="color-accent-1">emilywritescode [at] gmail [dot] com</span>.</p>
            </div>

            <div className='container font-3 mt-5'>
                <h5 className="font-2 color-accent-1">Terms.</h5>
                <p>All text on this site is my original content. You may not copy or share any of the text on this site.</p>
                <p>Poem text and related content, including statistics and descriptions, may change or be removed at any time.</p>
                <p>The display and functionality of the site may also change at any time — you can follow the development of the site via the <a className="link-style" href="https://github.com/emily-writes-poems">Github organization.</a></p>
                <p>If you find any bugs/issues, please contact me — I'd love to hear about it. (I also appreciate feedback on my work so send me your comments, impressions, wild theories, etc. too!)</p>
            </div>

            <div className='container font-3 mt-5'>
                <h5 className="font-2 color-accent-1">Privacy.</h5>
                <p>This site uses Google Analytics with Google Tag Manager to gather insights on visitors and how the site is used (such as pageviews and clicks).</p>
                <p>This site does not ask for personal data or information.</p>
            </div>

        </div>
    );
}

export default TermsPrivacy;
