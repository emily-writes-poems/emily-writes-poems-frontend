import React from 'react';
import { Helmet } from 'react-helmet';


const ErrorPage = ({ notFound, text }) => {
    return (
        <div className='container-fluid'>
            <Helmet>
                <title>{notFound} not found | Emily Writes Poems</title>
            </Helmet>
            <div className='container'>
                <div className='poem-header my-4'>
                    <h3 className="color-accent-1">{notFound} not found</h3>
                    <h6>Sorry, the {notFound.toLowerCase()} you requested could not be found. {text}</h6>
                </div>
            </div>
        </div>
    );
}

ErrorPage.defaultProps = {
    notFound: 'Page',
    text: ''
};

export default ErrorPage;
