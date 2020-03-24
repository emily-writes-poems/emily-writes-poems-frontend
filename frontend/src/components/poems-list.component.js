import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class PoemsList extends Component {

    render() {
        const poems = ['Silver', 'i am total lost, teehee', 'Let\'s Kill This Love', 'Downtown Train', 'Me and Summer: It\'s Complicated', 'Macy\'s Herald Square', 'Like You', 'Homemade Curiosity', 'Green Eyes', 'Galaxy', 'False Smiles', 'mm', 'May 6th', 'etc....']

        const poemsList = poems.map((poem) =>
            <ul>
                <li>
                    <Link className="poem" to={"/poem/" + poem}>{poem}</Link>
                </li>
            </ul>
        );

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
                   {poemsList}
               </div>
            </div>
        )
    }
}
