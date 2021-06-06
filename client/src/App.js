import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './utils/Header';
import Footer from './utils/Footer';
import ThemeSwitcher from './utils/theme-switcher';

import Home from './components/Home';
import OldPoem from './components/poem.component';
import PoemCollection from './components/PoemCollection';
import Poem from './components/Poem';

import ErrorPage from './components/errorpage.component';

import TagManager from 'react-gtm-module';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
library.add(faSun, faMoon);

const tagManagerArgs = { gtmId: 'GTM-NHQ4NHC' }
TagManager.initialize(tagManagerArgs);

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/'><Home /></Route>
                        <Route path='/collection/:collection_id'><PoemCollection /></Route>
                        <Route path='/poem/:poem_id'><Poem /></Route>
                        <Route path='*' component={ErrorPage} />
                    </Switch>
                    <Footer />
                    <ThemeSwitcher />
                </div>
            </Router>
        );
    }
}

export default App;
