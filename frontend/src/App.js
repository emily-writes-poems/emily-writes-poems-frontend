import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header';
import Footer from './components/footer';

import PoemsList from './components/poems-list.component';
import Poem from './components/poem.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
library.add(faSun, faMoon);


class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={PoemsList} />
                        <Route path='/poem/:poem_id' component={Poem} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
