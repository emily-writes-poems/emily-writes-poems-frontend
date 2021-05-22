import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//const Markdown = require('react-markdown/with-html');


const NewPoem = () => {
    const { poem_id } = useParams();
    const [ poem_data, setPoemData ] = useState();

    useEffect(() => {
        const getPoemData = async () => {
            const res = await fetch(`http://localhost:5000/poems/poem/${poem_id}`);

            await res.json().then((data) => setPoemData(data))
        };
        getPoemData();
    }, [poem_id]);


    useEffect(() => {
        console.log(poem_data);
    }, [poem_data]);


    return (
        <div>
        { poem_data &&
            (
            <div>
            <div className='container'>
                <div className='poem-header my-4'>
                    <h3 className='color-accent-1'>
                        {poem_data.poem_title}
                    </h3>
                    <h6>
                        Emily Lau ~ {poem_data.poem_date}
                    </h6>
                </div>
            </div>

            <div className='container poemtext mt-5'>
                {poem_data.poem_text}
            </div>

            <div className='container poemdetails font-2 mt-5'>
                <div className='behindTitle'>
                    <h5 className='font-2 color-accent-1'>behind the title.</h5>
                    <p>{poem_data.poem_behind_title}</p>
                </div>

                <div className='behindPoem'>
                    <h5 className='font-2 color-accent-1'>behind the poem.</h5>
                    <p>{poem_data.poem_behind_poem}</p>
                </div>

                <div>
                    <h5 className='font-2 color-accent-1'>
                        lines.
                    </h5>
                    <p>{poem_data.poem_linecount}</p>
                </div>

                <div>
                    <h5 className='font-2 color-accent-1'>
                       words.
                    </h5>
                    <p>{poem_data.poem_wordcount}</p>
                </div>
            </div>
            </div>
            )
        }
        </div>
    );
}

export default NewPoem;
