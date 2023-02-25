import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';


const PoemsList = (props) => {
    const [ poems_list, setPoemsList ] = useState();
    const [ list_style, setListStyle ] = useState();

    // Set poems list from passed props
    useEffect(() => {
        setPoemsList(props.poems_list);
    }, [props.poems_list]);


    // Toggle list style
    useEffect(() => {
        setListStyle(props.list_style);
    }, [props.list_style]);


    return (
        <>
        { poems_list && [list_style === "list" ?
            <ul className="homepage-poems-list">
                { poems_list.map((poem, index) =>
                    <li key={poem.poem_id}>
                        <Link className="list-link-style no-td" to={'/poem/' + poem.poem_id}>
                             {poem.poem_title}
                        </Link>
                    </li>
                 ) }
            </ul>
            :
            <ul className="styledList">
                { poems_list.map((poem, index) =>
                    <li key={poem.poem_id}>
                        <Link to={'/poem/' + poem.poem_id}>
                             <Button className="button">
                                 <Markdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>{poem.poem_title}</Markdown>
                             </Button>
                        </Link>
                    </li>
                 ) }
            </ul>
            ]
        }
    </>
    )
}

export default PoemsList;
