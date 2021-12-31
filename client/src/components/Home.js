import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';
import { Badge } from 'react-bootstrap';

import About from '../utils/About';
import Feature from '../utils/Feature';
import PoemsList from './PoemsList';
import CollectionsList from './CollectionsList';

import { useLocalStorage } from '../utils/Utils';


const Home = () => {
    const [ poems_list, setPoemsList ] = useState();
    const [ poems_list_style, setPoemsListStyle ] = useLocalStorage('poems_list_style', 'list');

    const [ collections_list, setCollectionsList ] = useState();


    useEffect(() => {
        const getPoemsList = async () => {
            const res = await fetch('/poems/');
            await res.json().then((data) => setPoemsList(data));
        }
        const getCollectionsList = async () => {
            const res = await fetch('/poems/collections/');
            await res.json().then((data) => setCollectionsList(data));
        }
        getPoemsList();
        getCollectionsList();
    }, []);


    function toggle_poems_list_style(list_style) {
        setPoemsListStyle(list_style);
    }


    return (
        <>
            <>
            <Helmet>
                <title>Emily Writes Poems</title>
            </Helmet>
            <About />
            </>

            <>
            { ( poems_list && poems_list.length !== 0 ) &&
                <div className='container font-2'>
                    <h3 className='color-accent-2 my-4' align='center'>my poems. <Badge pill variant="secondary">{poems_list.length}</Badge></h3>
                    <Feature />
                    <div className='poems-list-formatter'>
                        <i className="material-icons" onClick={() => toggle_poems_list_style("list")}>format_list_bulleted</i>
                        <i className="material-icons" onClick={() => toggle_poems_list_style("block")}>grid_view</i>
                    </div>
                    <PoemsList poems_list={poems_list} list_style={poems_list_style}/>
                </div>
            }
            </>

            <>
            { ( collections_list && collections_list.length !== 0 ) &&
                <div className='container font-2 mt-5'>
                    <hr/>
                    <h3 className='color-accent-2 my-4' align='center'>poem collections. <Badge pill variant="secondary">{collections_list.length}</Badge></h3>
                    <CollectionsList collections_list={collections_list} />
                </div>
            }
            </>

        </>
    )
}

export default Home;
