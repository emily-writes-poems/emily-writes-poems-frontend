import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const FeaturedPoem = () => {
    const [ feature, setFeature ] = useState();

    useEffect(() => {
        const getFeature = async () => {
            const res = await fetch('/poems/feature');
            if(!res.ok) { res.json().then( data => { console.error(data.errorMessage); } ) }
            else { await res.json().then( data => setFeature(data) ); }
        };
        getFeature();
    }, [])


    return (
        <>
        { feature &&
            <div className="feature-alert align-center">
                <b>currently featured poem.</b><br />
                <Link className="featured-poem link-style" to={'/poem/' + feature.poem_id}>{feature.poem_title}</Link><br />
                <i>{feature.featured_text}</i>
            </div>
        }
        </>
    )
}

export default FeaturedPoem;
