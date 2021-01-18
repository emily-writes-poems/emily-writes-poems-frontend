import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import Header from './header';
import Footer from './footer';
import About from './about';
import ThemeSwitcher from './theme-switcher';


export default class PoemCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            description : '',
            poem_ids : [],
            poem_titles : []
        }
    }


    getCollectionData() {
        axios.get('/collection/' + this.props.match.params.collection_id)
        .then(response => {
            if(response!=null) {
                this.setState({
                    name : response.data.collection_name,
                    description : response.data.collection_description,
                    poem_ids : response.data.poem_ids,
                    poem_titles : response.data.poem_titles
                });
            }
        })
    }


    componentDidMount() {
        this.getCollectionData();
    }


    render() {
        return (
            <div>
                <Helmet>
                    <title>Emily Writes Poems</title>
                </Helmet>
                <Header />
                <div className='container font-2'>
                   <h3 className='color-accent-2 my-4' align='center'>poem collection title would go here!</h3>
                </div>
                <Footer />
                <ThemeSwitcher />
            </div>
        )
    }
}
