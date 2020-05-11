import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';


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
        return(this.state.poems.map((poem) =>
            <li>
                <Link className="poem" key={poem.poem_title} to={"/poem/" + poem.poem_title}>{poem.poem_title}</Link>
            </li>
        ));
    }

    render() {
        return (
            <div className="container-fluid page">
                <div className="container">
                    <div className="header mt-4" align="center">
                        <h1>emily.writes.poems.</h1>
                        <h5>a collection of my poems.</h5>
                    </div>
                    <hr/>
                    <p className="about">I've written some poems. Some about myself. Some about the world as I see it. And many about the people and worlds that I've created and imagined.</p>
               </div>
               <div className="container poemslist">
                   <h2 className="header-2 mt-4" align="center">my poems.</h2>
                   <ul>{this.poemsList()}</ul>
               </div>
            </div>
        )
    }
}
