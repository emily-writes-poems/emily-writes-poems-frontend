import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Badge } from 'react-bootstrap';

import About from '../utils/about';
import ErrorPage from './errorpage.component';

import Feature from './feature.component';


export default class PoemsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            poems: []
        }
    }


    componentDidMount() {
        axios.get('http://localhost:5000/poems/')
        .then(response => {
            if(!response.data) {
            } else {
                this.setState({poems : response.data});
            }
        })
        .catch((error) => {
            console.log('yeeyy');
            this.setState( {poems : null} );
        })
    }


    poemsList() {
        // map each poem to its own Link
        return (this.state.poems.map((poem) =>
            <li key={poem.poem_id}>
                <Link className='link-style' to={'/poem/' + poem.poem_id}>{poem.poem_title}</Link>
            </li>
        ));
    }


    render() {
        if(!this.state.poems) { return (<div><ErrorPage notFound="Poems list" text="The server is likely down. Please try again later."/></div>); }

        // While loading
        if (!this.state.poems.length) { return null; }

        // Poems list found
        if (this.state.poems) {
            return (
                <div>
                    <Helmet>
                        <title>Emily Writes Poems</title>
                    </Helmet>
                    <About />
                    <div className='container font-2'>
                       <h3 className='color-accent-2 my-4' align='center'>my poems. <Badge pill variant="secondary">{this.state.poems.length}</Badge></h3>
                       <Feature />
                       <ul>{this.poemsList()}</ul>
                    </div>
                </div>
            );
        }
    }
}
