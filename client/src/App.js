import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <BrowserRouter>
            <div>
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/terms_privacy' element={<TermsPrivacy />} />
                    <Route exact path='/collection/:collection_id' element={<PoemCollection />} />
                    <Route exact path='/poem/:poem_id' element={<Poem />} />
                    <Route path='*' element={ErrorPage} /> />
                </Routes>
                <Footer />
                <ThemeSwitcher />
            </div>
        </BrowserRouter>
    );
}

export default App;
