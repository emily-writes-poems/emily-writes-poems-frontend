import React, { Component } from 'react';
import { Helmet } from 'react-helmet';


export default class ErrorPage extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Helmet>
                    <title>{this.props.notFound} not found | Emily Writes Poems</title>
                </Helmet>
                <div className='container'>
                    <div className='poem-header my-4'>
                        <h3 className="color-accent-1">{this.props.notFound} not found</h3>
                        <h6>Sorry, the {this.props.notFound.toLowerCase()} you requested could not be found. {this.props.text}</h6>
                    </div>
                </div>
            </div>
        );
    }
}

ErrorPage.defaultProps = {
    notFound: 'Page',
    text: ''
};
