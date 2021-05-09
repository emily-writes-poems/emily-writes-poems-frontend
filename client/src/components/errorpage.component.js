import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../utils/header';
import Footer from '../utils/footer';
import ThemeSwitcher from '../utils/theme-switcher';


export default class ErrorPage extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Helmet>
                    <title>{this.props.text} not found | Emily Writes Poems</title>
                </Helmet>
                <Header />
                <div className='container'>
                    <div className='poem-header my-4'>
                        <h3 className="color-accent-1">{this.props.text} not found</h3>
                        <h6>Sorry, the {this.props.text.toLowerCase()} you requested could not be found.</h6>
                    </div>
                </div>
                <Footer />
                <ThemeSwitcher/>
            </div>
        );
    }
}

ErrorPage.defaultProps = {
    text: 'Page'
};
