import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import temp_image from '../images/temp_image.jpg'

import Header from './header';

const Markdown = require('react-markdown/with-html');


export default class Poem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            date : '',
            title : '',
            text : [],
            linecount : 0,
            wordcount : 0,
            behind_title : '',
            behind_poem : '',
            similar_poems : [],
            top_words : [],
        };
    }

    componentDidMount() {
        // get poem data from Mongo
        axios.get('http://localhost:3456/poems/' + this.props.match.params.poem_id)
            .then(response => {
                if(response != null){
                    this.setState({
                        id : this.props.match.params.poem_id,
                        date : response.data.poem_date,
                        title : response.data.poem_title,
                        text : response.data.poem_text,
                        linecount : response.data.poem_linecount,
                        wordcount : response.data.poem_wordcount,
                        behind_title : response.data.poem_behind_title,
                        behind_poem : response.data.poem_behind_poem,
                        similar_poems : ['placeholder1', 'placeholder2', 'placeholder3'],
                        top_words : response.data.top_words,
                    });
                    console.log(this.state)
                }
            })
            .catch((error) => {
                console.log(error);
                if (error.response.data.message === 'poem not found'){
                    console.log('Server unable to find requested poem.')
                }
                this.setState({ id: 'null poem'});
            });
        }


    poemText() {
        // make an array that has each line
        var i;
        var ret = ''

        for(i=0; i < this.state.text.length; i++){
            if(this.state.text[i] === ''){
                ret = ret + '<br />'  // have an actual line break
            } else {
                ret = ret + this.state.text[i].replace(/\t/g, '\u0009') + '\n';  // replace tab characters
            }
        }
        console.log(ret)
        return(ret);
    }


    topWords() {
        var ret = '';
        for (var word in this.state.top_words) {
            console.log(word)
            ret = ret + word + ' : '+ this.state.top_words[word] + '<br />';
        }
        return(ret);
    }


    similarPoems() {
        return (
            <div className='similarpoems'>
                <h6>Similar poems</h6>
                <ul>
                    <li><Link className='link-style no-td' to={this.state.similar_poems[0]}>{this.state.similar_poems[0]}</Link></li>
                    <li><Link className='link-style no-td' to={this.state.similar_poems[1]}>{this.state.similar_poems[1]}</Link></li>
                    <li><Link className='link-style no-td' to={this.state.similar_poems[2]}>{this.state.similar_poems[2]}</Link></li>
                </ul>
            </div>
        );
    }


    poemDetails() {
        return (
            <div>
                <hr />
                <h6>Behind the title</h6>
                <Markdown source={this.state.behind_title && this.state.behind_title}/>

                <h6>Behind the poem</h6>
                <Markdown source={this.state.behind_poem && this.state.behind_poem.replace(/\\n/g, '<br /><br />')} escapeHtml={false}/>

                <h6>Lines</h6>
                <p className="count">{this.state.linecount}</p>

                <h6>Words</h6>
                <p className="count">{this.state.wordcount}</p>

                <h6>Top words</h6>
                <Markdown source={this.topWords()} escapeHtml={false}/>

                {this.similarPoems()}
            </div>
        );
    }


    loadingPage() {
        return (
            <div className='container-fluid page'>
                <Helmet>
                    <title>Loading ... | Emily Writes Poems</title>
                </Helmet>
                <div className='container'>
                    <Header />
                    <div className='poem-header my-4'>
                        <h3>Loading ...</h3>
                    </div>
                </div>
            </div>
        );
    }


    poemErrorPage() {
        return (
            <div className='container-fluid page'>
                <Helmet>
                    <title>Poem not found | Emily Writes Poems</title>
                </Helmet>
                <div className='container'>
                    <Header />
                    <div className='poem-header my-4'>
                        <h3>Poem not found</h3>
                        <h6>Sorry, the poem you requested could not be found.</h6>
                    </div><br />
                <img src={temp_image} width="200px"/>
                </div>
            </div>
        );
    }


    render() {
        // While loading
        if (!this.state.id) { return (<div>{this.loadingPage()}</div>); }

        // Poem found
        if (this.state.id && this.state.id!=='null poem') {
            return (
                <div className='container-fluid page'>
                    <Helmet>
                        <title>{this.state.title} | Emily Writes Poems</title>
                    </Helmet>
                    <div className='container'>
                        <Header />
                        <div className='poem-header my-4'>
                            <h3>{this.state.title}</h3>
                            <h6>Emily Lau ~ {this.state.date}</h6>
                        </div>
                    </div>
                    <div className='container poemtext mt-5'>
                        <Markdown source={this.poemText()} escapeHtml={false}/>
                    </div>
                    <div className='container poemdetails mt-5'>
                        {this.poemDetails()}
                    </div>
                </div>
            );

        // Poem not found
        } else { return (<div>{this.poemErrorPage()}</div>); }

    }
}
