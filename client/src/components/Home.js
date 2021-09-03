import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';
import { Badge } from 'react-bootstrap';

import About from '../utils/About';
import Feature from '../utils/Feature';
import PoemsList from './PoemsList';


const Home = () => {
    const [ poems_list, setPoemsList ] = useState();
    const [ poems_list_style, setListStyle ] = useState("list");


    useEffect(() => {
        const getPoemsList = async () => {
            const res = await fetch('/poems/');
            await res.json().then((data) => setPoemsList(data));
        }
        getPoemsList();
    }, []);


    function toggle(list_style) {
        setListStyle(list_style);
    }

    return (
        <>
        { ( poems_list && poems_list.length !== 0 ) &&
        <>
            <Helmet>
                <title>Emily Writes Poems</title>
            </Helmet>
            <About />
            <div className='container font-2'>
                <h3 className='color-accent-2 my-4' align='center'>my poems. <Badge pill variant="secondary">{poems_list.length}</Badge></h3>
                <Feature />
                <div className='poems-list-formatter'>
                    <i className="material-icons" onClick={() => toggle("list")}>format_list_bulleted</i>
                    <i className="material-icons" onClick={() => toggle("block")}>grid_view</i>
                </div>
                <PoemsList poems_list={poems_list} list_style={poems_list_style}/>
            </div>

        </>
        }
        </>
    )
}

export default Home;
