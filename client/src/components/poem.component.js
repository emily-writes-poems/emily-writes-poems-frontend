import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Button } from 'react-bootstrap';

import Header from './header';
import Footer from './footer';
import ThemeSwitcher from './theme-switcher';

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
            similar_poems_ids : [],
            similar_poems_titles: [],
            top_words : [],
            poem_collections_ids : [],
            poem_collections_names: [],
            collection_poems_ids : [],
            collection_poems_titles : []
        }
    }


    getPoemData() {
        // get poem data from Mongo
        axios.get('/poems/poem/' + this.props.match.params.poem_id)
        .then(response => {
            if(response.data != null){
                this.setState({
                    id : this.props.match.params.poem_id,
                    date : response.data.poem_date,
                    title : response.data.poem_title,
                    text : response.data.poem_text,
                    linecount : response.data.poem_linecount,
                    wordcount : response.data.poem_wordcount,
                    behind_title : response.data.poem_behind_title,
                    behind_poem : response.data.poem_behind_poem,
                    similar_poems_ids : response.data.similar_poems_ids,
                    similar_poems_titles: response.data.similar_poems_titles,
                    top_words : response.data.top_words,
                });

                axios.get('/poems/collection_by_poem/' + this.state.id)
                .then(response => {
                    if(response.data != null) {
                        for(let col of response.data){
                            this.setState({
                                poem_collections_ids: [...this.state.poem_collections_ids, col.collection_id],
                                poem_collections_names: [...this.state.poem_collections_names, col.collection_name]
                            });
                        }
                    }
                })
            }
        })
        .catch((error) => {
            if (error.response && error.response.data && error.response.data.message === 'poem not found'){
                console.log('Server unable to find requested poem.')
            }
            this.setState({ id: 'null poem'});
        });

        // this irritating line is so that it'll scroll back up to the top
        window.scrollTo(0,0);
    }


    componentDidMount() {
        this.getPoemData();
    }


    componentDidUpdate(prevProps) {
        var oldID = prevProps.match.params.poem_id;
        var newID = this.props.match.params.poem_id;
        if(newID !== oldID) {
            this.getPoemData();
        }
    }


    poemText() {
        // make an array that has each line
        var i;
        var ret = '';

        for(i=0; i < this.state.text.length; i++){
            if(this.state.text[i] === ''){
                ret = ret + '<br />'  // have an actual line break
            } else {
                ret = ret + this.state.text[i].replace(/\t/g, '\u0009') + '\n';  // replace tab characters
            }
        }
        return(ret);
    }


    topWords() {
        var ret = '';
        for (var word in this.state.top_words) {
            ret = ret + word + ' : '+ this.state.top_words[word] + '<br />';
        }
        return(ret);
    }


    poemCollections() {
        if(this.state.poem_collections_ids && this.state.poem_collections_ids.length) {
            var collections = this.state.poem_collections_names.map((coll, index) =>
                <li key={index}>
                    <Link className='link-style no-td' to={'/collection/' + this.state.poem_collections_ids[index]}>
                        <Button className="button"><Markdown source={coll} escapeHtml={false}/></Button>
                    </Link>
                </li>
            );

            return (
                <div className="styledButtonLinks">
                    <h5 className="font-2 color-accent-1">collection(s).</h5>
                    <ul>
                        {collections}
                    </ul>
                </div>
            );
        }
    }


    similarPoems() {
        var links = this.state.similar_poems_ids.map((id, index) =>
            <li key={index}>
                <Link className='link-style no-td' to={this.state.similar_poems_ids[index]}>
                    <Button className="button">{this.state.similar_poems_titles[index]}</Button>
                </Link>
            </li>
        );

        return (
            <div className='styledButtonLinks'>
                <h5 className="font-2 color-accent-1">similar poems.</h5>
                <ul>
                    {links}
                </ul>
            </div>
        );
    }


    expandText(clicked, elemClass) {
        if(document.getElementsByClassName(elemClass)[0].classList.contains("hidden")){
            document.getElementsByClassName(clicked)[0].textContent = "[hide -]";
            document.getElementsByClassName(elemClass)[0].classList.remove("hidden");
            document.getElementsByClassName(elemClass)[0].classList.add("shown");
        } else {
            document.getElementsByClassName(clicked)[0].textContent = "[expand +]";
            document.getElementsByClassName(elemClass)[0].classList.remove("shown");
            document.getElementsByClassName(elemClass)[0].classList.add("hidden");
        }
    }


    poemDetails() {
        return (
            <div>
                <hr />
                <div className="behindTitle">
                    <h5 className="font-2 color-accent-1">behind the title. <span className="expand behindTitleButton" onClick={() => this.expandText("behindTitleButton", "behindTitleText")}>[expand +]</span></h5>
                    <Markdown className="hidden behindTitleText" source={this.state.behind_title && this.state.behind_title}/>
                </div>

                <div className="behindPoem">
                    <h5 className="font-2 color-accent-1">behind the poem. <span className="expand behindPoemButton" onClick={() => this.expandText("behindPoemButton", "behindPoemText")}>[expand +]</span></h5>
                    <Markdown className="hidden behindPoemText" source={this.state.behind_poem && this.state.behind_poem.replace(/\\n/g, '<br /><br />')} escapeHtml={false}/>
                </div>

                <h5 className="font-2 color-accent-1">lines.</h5>
                <p className="count">{this.state.linecount}</p>

                <h5 className="font-2 color-accent-1">words.</h5>
                <p className="count">{this.state.wordcount}</p>

                {this.topWords() && <><h5 className="font-2 color-accent-1">top words.</h5>
                 <Markdown source={this.topWords()} escapeHtml={false}/></>}

                {this.poemCollections()}

                {this.similarPoems()}
            </div>
        );
    }


    commentForm(){
        return(
            <div>
                <br />
                <h5 className="comment"><a className="link-style" href={"mailto:emilywritescode+poems@gmail.com?subject=Comment%20for%20"+ '"' + this.state.title + '"'}>[Leave your comments/feedback on this poem (via email).]</a></h5>
            </div>
        );
    }


    loadingPage() {
        return (
            <div className='container-fluid'>
                <Helmet>
                    <title>Loading ... | Emily Writes Poems</title>
                </Helmet>
                <div className='container'>
                    <div className='poem-header my-4'>
                        <h3>Loading ...</h3>
                    </div>
                </div>
                <ThemeSwitcher/>
            </div>
        );
    }


    poemErrorPage() {
        return (
            <div className='container-fluid'>
                <Helmet>
                    <title>Poem not found | Emily Writes Poems</title>
                </Helmet>
                <div className='container'>
                    <Header />
                    <div className='poem-header my-4'>
                        <h3>Poem not found</h3>
                        <h6>Sorry, the poem you requested could not be found.</h6>
                    </div>
                    <Footer />
                </div>
                <ThemeSwitcher/>
            </div>
        );
    }


    render() {
        // While loading
        if (!this.state.id) { return (<div>{this.loadingPage()}</div>); }

        // Poem found
        if (this.state.id && this.state.id!=='null poem') {
            return (
                <div>
                    <Header />
                    <Helmet>
                        <title>{this.state.title} | Emily Writes Poems</title>
                    </Helmet>
                    <div className='container'>
                        <div className='poem-header my-4'>
                            <h3 className="color-accent-1">{this.state.title}</h3>
                            <h6>Emily Lau ~ {this.state.date}</h6>
                        </div>
                    </div>
                    <div className='container poemtext mt-5'>
                        <Markdown source={this.poemText()} escapeHtml={false}/>
                    </div>
                    <div className='container poemdetails font-2 mt-5'>
                        {this.poemDetails()}
                    </div>
                    <div className="container font-2">
                        {this.commentForm()}
                    </div>
                    <Footer/>
                    <ThemeSwitcher/>
                </div>
            );

        // Poem not found
    } else { return (<div>{this.poemErrorPage()}</div>); }

    }
}
