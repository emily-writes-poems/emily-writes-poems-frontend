import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';


const CollectionsList = (props) => {
    const [ collections_list, setcollectionsList ] = useState();

    // Set collections list from passed props
    useEffect(() => {
        setcollectionsList(props.collections_list);
    }, [props.collections_list]);



    return (
        <>
        { collections_list &&
            <ul className="list-block">
                { collections_list.map((collection) =>
                    <li>
                        <Link to={'/collection/' + collection.collection_id}>
                             <Button className="button">
                                 <Markdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>{collection.collection_name}</Markdown>
                             </Button>
                        </Link>
                    </li>
                 ) }
            </ul>
        }
    </>
    )
}

export default CollectionsList;
