import React, { Component } from 'react';
import axios from 'axios';


export default class Poem extends Component {
    constructor(props) {
        super(props);
        this.state = {poem: {}};
    }

    componentDidMount() {
        axios.get('http://localhost:3456/poems/' + this.props.match.params.title)
            .then(response => {
                this.setState({poem: response.data})
                console.log(this.state.poem);
            })
    }


    render() {
        var date = this.state.poem.poem_date;
        var title = this.state.poem.poem_title;
        var text = this.state.poem.poem_text;
        var linecount = this.state.poem_date;
        var wordcount = this.state.poem_wordcount;
        return (
            <div>
                <h1>{title}</h1>
                <p>Emily Lau</p>
                <p>{text}</p>
            </div>
        )
    }
}
