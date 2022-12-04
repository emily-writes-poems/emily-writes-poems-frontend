import React, { useEffect, useState } from 'react';
import ReactWordcloud from 'react-wordcloud';


const Wordcloud = (props) => {
    const [wordcloud_data, setWordcloudData] = useState();
    const options = {
        rotations: 0,
        enableTooltip: false,
        fontSizes: [18, 54],
        fontFamily: 'Open Sans',
        colors: ['#5B58BB', '#817e92']
    }


    useEffect(() => {
        setWordcloudData(props.wordcloud_data);
    }, [props.wordcloud_data]);


    return (
        <ReactWordcloud words={wordcloud_data} options={options} />
    );
}

export default Wordcloud;
