import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import PoemsList from './components/poems-list.component';
import Poem from './components/poem.component';
import PoemCollection from './components/poem-collection.component';
import NewPoem from './components/Poem';

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
                    <Switch>
                        <Route path='/' exact component={PoemsList} />
                        <Route path='/poem/:poem_id' component={Poem} />
                        <Route path='/collection/:collection_id' component={PoemCollection} />
                        <Route path='/newpoem/:poem_id'>
                            <NewPoem />
                        </Route>
                        <Route path='*' component={ErrorPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
