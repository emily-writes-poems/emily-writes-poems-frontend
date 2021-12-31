import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './utils/Header';
import Footer from './utils/Footer';
import ThemeSwitcher from './utils/ThemeSwitcher';
import { ScrollToTop } from './utils/Utils'

import Home from './components/Home';
import TermsPrivacy from './components/TermsPrivacy';
import PoemCollection from './components/PoemCollection';
import Poem from './components/Poem';

import ErrorPage from './components/ErrorPage';

import TagManager from 'react-gtm-module';


const tagManagerArgs = { gtmId: 'GTM-NHQ4NHC' }
TagManager.initialize(tagManagerArgs);

const App = () => {
    return(
        <Router>
            <div>
                <ScrollToTop />
                <Header />
                <Switch>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/terms_privacy'><TermsPrivacy /></Route>
                    <Route exact path='/collection/:collection_id'><PoemCollection /></Route>
                    <Route exact path='/poem/:poem_id'><Poem /></Route>
                    <Route path='*' component={ErrorPage} />
                </Switch>
                <Footer />
                <ThemeSwitcher />
            </div>
        </Router>
    );
}

export default App;
