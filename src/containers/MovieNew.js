import React, { Component } from 'react'
import { addMovie } from '../actions/index'
import { connect } from 'react-redux'

class MovieNew extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            synopsis: '',
            poster_url: '',
            genre: ''
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
        this.props.history.push('/')
    }


    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <h3>Add a Movie</h3>
        
                <input type="text" name="title" id="title" value={this.state.title} onChange={(event) => this.handleOnChange(event)} placeholder="title"/>
            
        
                <input type="text" name="synopsis" id="synopsis" value={this.state.synopsis} onChange={(event) => this.handleOnChange(event)} placeholder="synopsis"/>
            
        
                <input type="text" name="poster_url" id="poster_url" value={this.state.poster_url} onChange={(event) => this.handleOnChange(event)} placeholder="image link"/>
            
                <input type="text" name="genre" id="genre" value={this.state.genre} onChange={(event) => this.handleOnChange(event)} placeholder="genre"/>


                
                <input type="submit" value="Add Movie"></input>
            </form>
        )
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         addMovie: movie => dispatch(addMovie(movie))
//     }
// }

export default connect(null, { addMovie })(MovieNew)