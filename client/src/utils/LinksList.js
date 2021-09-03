import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';


const LinksList = (props) => {
    const [ link_path, setLinkPath ] = useState();
    const [ link_IDs, setLinkIDs ] = useState();
    const [ link_titles, setLinkTitles ] = useState();
    const [ link_buttons, setLinkButtons ] = useState();


    // Set data from passed props
    useEffect(() => {
        setLinkPath(props.link_path);
        setLinkIDs(props.link_IDs);
        setLinkTitles(props.link_titles);
    }, [props.link_path, props.link_IDs, props.link_titles]);


    useEffect(() => {
        if(link_IDs && link_titles) {
            const link_buttons = link_IDs.map((link_id, index) => (
                <li key={index}>
                    <Link className='no-td' to={'/' + link_path + '/' + link_id}>
                        <Button className="button">
                            <Markdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>{link_titles[index]}</Markdown>
                        </Button>
                    </Link>
                </li>
            ));
            setLinkButtons(link_buttons);
        }
    }, [link_path, link_IDs, link_titles]);


    return (
        <>
        <div className="styledList">
            <ul>
                {link_buttons}
            </ul>
        </div>
        </>
    )

}

export default LinksList;
