import React from 'react';

const JumpToNavigation = () => {

    const jumpTo = (id) => {
        let anchor = document.getElementById(id);
        anchor.scrollIntoView();
    }

    return (
        <div className="jump-to-navigation">
            <ul id="jump-to-buttons">
                <li><i className="material-icons" onClick={() => {window.scrollTo(0,0)}}>arrow_circle_up</i></li>
                <li><i className="material-icons" onClick={() => jumpTo("home-poems")}>text_snippet</i></li>
                <li><i className="material-icons" onClick={() => jumpTo("home-collections")}>library_books</i></li>
            </ul>
            <i className="material-icons">menu</i>
        </div>
    );
}

export default JumpToNavigation;
