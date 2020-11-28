import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import Header from './header';
import Footer from './footer';
import ThemeSwitcher from './theme-switcher';


export default class PoemsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            poems: []
        }
    }


    componentDidMount() {
        axios.get('/poems/')
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
            <div>
                <Helmet>
                    <title>Emily Writes Poems</title>
                </Helmet>
                <Header />
                <div className='container'>
                    <p className='font-1'>I've written some poems. Some about myself. Some about the world as I see it. And many about the people and worlds that I've created and imagined.</p>
               </div>
               <div className='container font-2'>
                   <h2 className='color-accent-2 my-4' align='center'>my poems. ({this.state.poems.length})</h2>
                   <ul>{this.poemsList()}</ul>
               </div>
               <Footer />
               <ThemeSwitcher />
            </div>
        )
    }
}
