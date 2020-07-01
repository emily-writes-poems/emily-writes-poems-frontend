import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import PoemsList from './components/poems-list.component';
import Poem from './components/poem.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
library.add(faSun, faMoon);


class App extends React.Component{
    render(){
        return(
            <Router>
                <Route path='/' exact component={PoemsList} />
                <Route path='/poem/:poem_id' component={Poem} />
            </Router>
        );
    }
}

export default App;
