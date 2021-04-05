import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Button } from 'react-bootstrap';

import Header from '../utils/header';
import Footer from '../utils/footer';
import ThemeSwitcher from '../utils/theme-switcher';

import ErrorPage from './errorpage.component';

const Markdown = require('react-markdown/with-html');


export default class PoemCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            summary : '',
            poem_ids : [],
            poem_titles : []
        }
    }


    getCollectionData() {
        axios.get('/poems/collection/' + this.props.match.params.collection_id)
        .then(response => {
            if(response.data!=null) {
                this.setState({
                    name : response.data.collection_name,
                    summary : response.data.collection_summary,
                    poem_ids : response.data.poem_ids,
                    poem_titles : response.data.poem_titles
                });
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }


    componentDidMount() {
        this.getCollectionData();
    }


    collectionSummary(){
        if(this.state.summary) {
            return (
                <div>
                    <h5 className="font-2 color-accent-1">About this poem collection.</h5>
                    <h6><Markdown source={this.state.summary} escapeHtml={false}/></h6>
                </div>
            );
        } else {
            return (
                <div>
                    <h5 className="font-2 color-accent-1">About this poem collection.</h5>
                    <h6>summary to come!</h6>
                </div>
            );
        }
    }

    collectionPoems(){
         var links = this.state.poem_ids.map((id, index) =>
             <li key={index}>
                 <Link className='link-style no-td' to={'/poem/' + this.state.poem_ids[index]}>
                     <Button className="button">{this.state.poem_titles[index]}</Button>
                 </Link>
             </li>
         );

         return (
             <div className='styledButtonLinks'>
                 <h5 className="font-2 color-accent-1">poems in collection.</h5>
                 <ul>
                     {links}
                 </ul>
             </div>
         );
    }


    render() {
        if(this.state.name){
            return (
                <div>
                    <Helmet>
                        <title>Emily Writes Poems</title>
                    </Helmet>
                    <Header />
                    <div className='container font-2'>
                       <h3 className='color-accent-1 my-4'><Markdown source={this.state.name} escapeHtml={false}/></h3>
                    </div>
                    <div className='container font-3 mt-5'>
                        {this.collectionSummary()}
                    </div>
                    <div className='container mt-5'>
                        {this.collectionPoems()}
                    </div>
                    <Footer />
                    <ThemeSwitcher />
                </div>
            );
        } else {
            return(
                <div><ErrorPage text="Poem collection"/></div>
            );
        }
    }
}
