import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import Header from './header';


export default class PoemsList extends Component {
    constructor(props) {
        super(props);
        this.state = {poems: []};
    }


    componentDidMount() {
        axios.get('http://localhost:3456/poems/')
        .then(response => {
            this.setState({poems: response.data});
            console.log(this.state.poems);
        })
        .catch(function (error) {
            console.log(error);
        })
    }


    poemsList() {
        // map each poem to its own Link
        return(this.state.poems.map((poem) =>
            <li key={poem.poem_id}>
                <Link className='link-style' to={'/poem/' + poem.poem_id}>{poem.poem_title}</Link>
            </li>
        ));
    }


    render() {
        return (
            <div className='container-fluid page'>
                <Helmet>
                    <title>Emily Writes Poems</title>
                </Helmet>
                <div className='container'>
                    <Header />
                    <p className='about'>I've written some poems. Some about myself. Some about the world as I see it. And many about the people and worlds that I've created and imagined.</p>
               </div>
               <div className='container poemslist'>
                   <h2 className='header-2 my-4' align='center'>my poems.</h2>
                   <ul>{this.poemsList()}</ul>
               </div>
            </div>
        )
    }
}
