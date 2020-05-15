import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import PoemsList from './components/poems-list.component';
import Poem from './components/poem.component';

class App extends React.Component{
    render(){
        return(
            <Router>
                <Route path='/' exact component={PoemsList} />
                <Route path='/poem/:title' component={Poem} />
                <Route path='/poem/:title/details' component={PoemDetails} />
            </Router>
        );
    }
}

export default App;
