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

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addMovie(this.state)
    }


    render() {
        return (
            <form onSumbit={this.handleOnSubmit}>
                <h3>Add a Movie</h3>
                <input type="text" name="title" id="title" value={this.state.title} onChange={(event) => this.handleOnChange(event)}/>
                <input type="textarea" name="synopsis" id="synopsis" value={this.state.synopsis} onChange={(event) => this.handleOnChange(event)}/>
                <input type="text" name="poster_url" id="poster_url" value={this.state.poster_url} onChange={(event) => this.handleOnChange(event)}/>
                <input type="submit">Add Movie</input>
            </form>
        )
    }
}

export default connect()(MovieNew)