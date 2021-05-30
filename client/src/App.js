import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './utils/header';
import Footer from './utils/footer';
import ThemeSwitcher from './utils/theme-switcher';

import PoemsList from './components/poems-list.component';
import OldPoem from './components/poem.component';
import PoemCollection from './components/poem-collection.component';
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
                        <Route path='/' exact component={PoemsList} />
                        <Route path='/oldpoem/:poem_id' component={OldPoem} />
                        <Route path='/collection/:collection_id' component={PoemCollection} />
                        <Route path='/poem/:poem_id'>
                            <Poem />
                        </Route>
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
