import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Header from './header';
import Footer from './footer';
import ThemeSwitcher from './theme-switcher';

export default class ErrorPage extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Helmet>
                    <title>{this.props.text} not found | Emily Writes Poems</title>
                </Helmet>
                <div className='container'>
                    <Header />
                    <div className='poem-header my-4'>
                        <h3 className="color-accent-1">{this.props.text} not found</h3>
                        <h6>Sorry, the {this.props.text.toLowerCase()} you requested could not be found.</h6>
                    </div>
                    <Footer />
                </div>
                <ThemeSwitcher/>
            </div>
        );
    }
}

ErrorPage.defaultProps = {
    text: 'Page'
};
