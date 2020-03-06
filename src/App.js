import React from 'react';

class App extends React.Component{

    sortAlphabetical(list){
        return list[1]
    }

    render(){
        const poems = ['Silver', 'i am total lost, teehee', 'Let\'s Kill This Love', 'Downtown Train', 'Me and Summer: It\'s Complicated', 'Macy\'s Herald Square', 'Like You', 'Homemade Curiosity', 'Green Eyes', 'Galaxy', 'False Smiles', 'mm', 'May 6th', 'etc....']

        const poemsList = poems.map((poem) =>
            <li>{poem}</li>
        );

        return(
            <div>
                <div className="header" align="center">
                    <h1>emily.writes.poems.</h1>
                </div>
                <div className="section-poems">
                    <h2>my poems.</h2>
                    <ul>{poemsList}</ul>
                </div>
            </div>
        );
    }
}

export default App;
