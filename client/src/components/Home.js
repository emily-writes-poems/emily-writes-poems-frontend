import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Badge } from 'react-bootstrap';

import About from '../utils/about';
import Feature from '../utils/Feature';


const Home = () => {
    const [ poems_list, setPoemsList ] = useState();


    useEffect(() => {
        const getPoemsList = async () => {
            const res = await fetch('/poems/');
            await res.json().then((data) => setPoemsList(data));
        }
        getPoemsList();
    }, []);


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
               <ul>
                   { poems_list.map((poem) =>
                       <li key={poem.poem_id}>
                           <Link className='link-style' to={'/poem/' + poem.poem_id}>{poem.poem_title}</Link>
                       </li>
                    ) }
               </ul>
            </div>
        </>
        }
        </>
    )
}

export default Home;
