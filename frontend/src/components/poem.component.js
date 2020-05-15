import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Header from './header'

const Markdown = require('react-markdown/with-html');


export default class Poem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date : '',
            title : '',
            text : {},
            linecount : 0,
            wordcount : 0
        };
    }


    componentDidMount() {
        // get poem data from Mongo
        axios.get('http://localhost:3456/poems/' + this.props.match.params.title)
            .then(response => {
                this.setState({
                    date : response.data.poem_date,
                    title : response.data.poem_title,
                    text : response.data.poem_text,
                    linecount : response.data.poem_date,
                    wordcount : response.data.poem_wordcount
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    poemText(){
        // make an array that has each line
        var i;
        var ret = ''

        for(i=0; i < this.state.text.length; i++){
            if(this.state.text[i] === ''){
                ret = ret + '<br />'
            } else {
                ret = ret + this.state.text[i].replace(/\t/g, '\u0009') + '\n';
            }
        }
        console.log(ret)
        return(ret);
    }


    similarPoems(){
        return(
            <ul>
                <li><Link className='link-style' to=''>poem1 goes here</Link></li>
                <li><Link className='link-style' to=''>poem2 goes here</Link></li>
                <li><Link className='link-style' to=''>poem3 goes here</Link></li>
            </ul>
        );
    }

    render() {
        return (
            <div className='container-fluid page'>
                <div className='container'>
                    <Header />
                    <hr />
                    <div className='poem-header my-4'>
                        <h4>{this.state.title}</h4>
                        <h6>Emily Lau ~ {this.state.date}</h6>
                    </div>
                </div>
                <div className='container poemtext mt-5'>
                    <Markdown source={this.poemText()} escapeHtml={false}/>
                </div>
                <div className='container similarpoems mt-5'>
                    <hr />
                    <h5>Similar poems</h5>
                    {this.similarPoems()}
                </div>
            </div>
        );
    }
}
