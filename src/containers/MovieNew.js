import React, { Component } from 'react'
import { addMovie } from '../actions/index'
import { connect } from 'react-redux'

class MovieNew extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            synopsis: '',
            poster_url: ''
        }
    }

    render() {
        return (
            <form>
                <h3>Add a Movie</h3>
                <input type="text" name="title" id="title" value={this.state.title}/>
                <input type="textarea" name="synopsis" id="synopsis" value={this.state.synopsis} />
                <input type="text" name="poster_url" id="poster_url" value={this.state.poster_url} />
                <input type="submit">Add Movie</input>
            </form>
        )
    }
}

export default connect()(MovieNew)