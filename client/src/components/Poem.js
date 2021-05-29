import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

import { Helmet } from 'react-helmet';
import LinksList from './LinksList';



const NewPoem = () => {
    const { poem_id } = useParams();
    const [ poem_data, setPoemData ] = useState();
    const [ formatted_poem_text, setFormattedPoemText ] = useState();
    const [ collection_ids, setCollectionIDs ] = useState();
    const [ collection_names, setCollectionNames ] = useState();


    // Fetch poem data from server
    useEffect(() => {
        const getPoemData = async () => {
            const res = await fetch(`http://localhost:5000/poems/poem/${poem_id}`);

            await res.json().then((data) => setPoemData(data))
        };
        getPoemData();
    }, [poem_id]);


    // Format poem text
    useEffect(() => {
        var ret = '';
        poem_data &&
        poem_data.poem_text.map((line, index) =>
            line === '' ? ret += '<br />'
            :
            ret += line.replace(/\t/g, '\u0009') + '\n'
        );
        setFormattedPoemText(ret);
    }, [poem_data])


    // Print out poem data
    useEffect(() => {
        console.log(poem_data);
    }, [poem_data]);


    // Print out formatted poem text
    useEffect(() => {
        console.log(formatted_poem_text);
    }, [formatted_poem_text]);


    // Fetch collection(s) from server
    useEffect(() => {
        const getCollections = async () => {
            const res = await fetch(`http://localhost:5000/poems/collections_by_poem/${poem_id}`);

            await res.json().then((data) => {
                setCollectionIDs(data.map((coll, _) => coll.collection_id));
                setCollectionNames(data.map((coll, _) => coll.collection_name));
            })
        };
        getCollections();
    }, [poem_id]);


    // Print out collections data
     useEffect(() => {
        console.log(collection_ids);
        console.log(collection_names);
     }, [collection_ids, collection_names]);



    return (
        <>
        { poem_data &&
            (<div>
                <Helmet>
                    <title>{poem_data.poem_title} | Emily Writes Poems</title>
                </Helmet>

                <div className='container'>
                    <div className='poem-header my-4'>
                        <h3 className='color-accent-1'>{poem_data.poem_title}</h3>
                        <h6>Emily Lau ~ {poem_data.poem_date}</h6>
                    </div>
                </div>

                <div className='container poemtext mt-5'>
                    <Markdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>{formatted_poem_text}</Markdown>
                </div>

                <div className='container poemdetails font-2 mt-5'>
                    <hr/>
                    <div className='behindTitle'>
                        <h5 className='font-2 color-accent-1'>behind the title.</h5>
                        <Markdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>{poem_data.poem_behind_title}</Markdown>
                    </div>

                    <div className='behindPoem'>
                        <h5 className='font-2 color-accent-1'>behind the poem.</h5>
                        <Markdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>{poem_data.poem_behind_poem}</Markdown>
                    </div>

                    <div>
                        <h5 className='font-2 color-accent-1'>lines.</h5>
                        <p>{poem_data.poem_linecount}</p>
                    </div>

                    <div>
                        <h5 className='font-2 color-accent-1'>words.</h5>
                        <p>{poem_data.poem_wordcount}</p>
                    </div>

                    { poem_data.top_words &&
                    <div>
                        <h5 className='font-2 color-accent-1'>top words.</h5>
                    </div>
                    }

                    { (collection_ids && collection_ids.length !== 0) &&
                    <LinksList link_path={'collection'} link_IDs={collection_ids} link_titles={collection_names}/>
                    }
                </div>
            </div>)
        }
        </>
    );
}

export default NewPoem;
