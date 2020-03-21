import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class PoemsList extends Component {

    render() {
        const poems = ['Silver', 'i am total lost, teehee', 'Let\'s Kill This Love', 'Downtown Train', 'Me and Summer: It\'s Complicated', 'Macy\'s Herald Square', 'Like You', 'Homemade Curiosity', 'Green Eyes', 'Galaxy', 'False Smiles', 'mm', 'May 6th', 'etc....']

        const poemsList = poems.map((poem) =>
            <ul>
                <li>
                    <Link to={"/poem/" + poem}>{poem}</Link>
                </li>
            </ul>
        );

        return (
            <div className="container">
                <div className="header" align="center">
                    <h1>emily.writes.poems.</h1>
                    <p>a collection of my poems.</p>
                    <hr/>
                </div>
                <div className="info">
                    I've written some poems. Some about myself. Some about the world as I see it. And many about the people and worlds that I've created and imagined.
                </div>
                <div className="poemslist">
                    <h2 align="center">my poems.</h2>
                    {poemsList}
                </div>
            </div>
        )
    }
}
