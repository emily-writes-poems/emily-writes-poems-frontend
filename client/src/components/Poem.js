import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import { Badge } from 'react-bootstrap';

import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

import LinksList from '../utils/LinksList';
import ErrorPage from './ErrorPage';


const Poem = () => {
    const { poem_id } = useParams();
    const [ poem_not_found, setPoemNotFound ] = useState(false);
    const [ poem_data, setPoemData ] = useState();
    const [ formatted_poem_text, setFormattedPoemText ] = useState();
    const [ collection_ids, setCollectionIDs ] = useState();
    const [ collection_names, setCollectionNames ] = useState();

    const [ behindTitleHidden, setBehindTitleToggle ] = useState(true);
    const [ behindPoemHidden, setBehindPoemToggle ] = useState(true);


    // Fetch poem data from server
    useEffect(() => {
        const getPoemData = async () => {
            const res = await fetch(`/poems/poem/${poem_id}`);
            if (!res.ok) { res.json().then( data => { console.error(data.errorMessage); } ) }
            else { await res.json().then((data) => {
                if (Object.keys(data).length === 0) {
                    setPoemNotFound(true);
                } else {
                    setPoemData(data);
                }
            }); }
        };
        getPoemData();
        window.scrollTo(0,0);
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
        poem_data && setFormattedPoemText(ret);
    }, [poem_data])


    // Fetch collection(s) from server
    useEffect(() => {
        const getCollections = async () => {
            const res = await fetch(`/poems/collections_by_poem/${poem_id}`);
            await res.json().then((data) => {
                if (Object.keys(data).length !== 0) {
                    setCollectionIDs(data.map((coll) => coll.collection_id));
                    setCollectionNames(data.map((coll) => coll.collection_name));
                } else {
                    setCollectionIDs([]);
                    setCollectionNames([]);
                }
            });
        };
        getCollections();
    }, [poem_id]);


    // Reset expand option for behind title & behind poem sections
    useEffect(() => {
        setBehindTitleToggle(true);
        setBehindPoemToggle(true);
    }, [poem_id])


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
                        <h5 className='font-2 color-accent-1'>behind the title.<span className={'eh ' + ( behindTitleHidden ? 'expand' : 'hide' )} onClick={() => setBehindTitleToggle(!behindTitleHidden)}></span></h5>
                        <Markdown className={'behindTitleText ' + ( behindTitleHidden ? 'hidden' : 'shown' )} rehypePlugins={[rehypeRaw, rehypeSanitize]}>{poem_data.poem_behind_title ? poem_data.poem_behind_title : '*Behind the title to come!*'}</Markdown>
                    </div>

                    <div className='behindPoem'>
                        <h5 className='font-2 color-accent-1'>behind the poem.<span className={'eh ' + ( behindPoemHidden ? 'expand' : 'hide' )} onClick={() => setBehindPoemToggle(!behindPoemHidden)}></span></h5>
                        <Markdown className={'behindPoemText ' + ( behindPoemHidden ? 'hidden' : 'shown' )} rehypePlugins={[rehypeRaw, rehypeSanitize]}>{poem_data.poem_behind_poem ? poem_data.poem_behind_poem : '*Behind the poem to come!*'}</Markdown>
                    </div>

                    <div>
                        <h5 className='font-2 color-accent-1'>lines.</h5>
                        <p>{poem_data.poem_linecount}</p>
                    </div>

                    <div>
                        <h5 className='font-2 color-accent-1'>words.</h5>
                        <p>{poem_data.poem_wordcount}</p>
                    </div>

                    { (poem_data.top_words && poem_data.top_words.length !== 0) &&
                    <div>
                        <h5 className='font-2 color-accent-1'>top words.</h5>
                        <div className="styledList">
                            <ul>
                                { Object.keys(poem_data.top_words).map((word, _) =>
                                    <li key={word}>
                                        {word} <Badge pill variant="secondary">{poem_data.top_words[word]}</Badge>
                                    </li>
                                ) }
                            </ul>
                        </div>
                    </div>
                    }

                    { poem_data.similar_poems_ids &&
                    <div>
                        <h5 className='font-2 color-accent-1'>similar poems.</h5>
                        <LinksList link_path={'poem'} link_IDs={poem_data.similar_poems_ids} link_titles={poem_data.similar_poems_titles}/>
                    </div>
                    }

                    { (collection_ids && collection_ids.length !== 0) &&
                    <div>
                        <h5 className='font-2 color-accent-1'>collection(s).</h5>
                        <LinksList link_path={'collection'} link_IDs={collection_ids} link_titles={collection_names}/>
                    </div>
                    }
                </div>
            </div>)
        }
        { poem_not_found && ( <ErrorPage notFound='Poem' /> ) }
        </>
    );
}

export default Poem;
