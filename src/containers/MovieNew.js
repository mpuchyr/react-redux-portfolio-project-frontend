import React, { Component } from 'react'
import { addMovie, fetchGenres } from '../actions/index'
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

    componentDidMount() {
        {this.props.fetchGenres()}
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

    populateGenres = () => {
        return (

                 this.props.genres.map(genre => {
                        return (
                            <option value={genre.name} key={genre.id}>{genre.name}</option>
                        )
                    })
        )
    }


    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <h3>Add a Movie</h3>
        
                <input type="text" name="title" id="title" value={this.state.title} onChange={(event) => this.handleOnChange(event)} placeholder="title"/>
            
        
                <input type="text" name="synopsis" id="synopsis" value={this.state.synopsis} onChange={(event) => this.handleOnChange(event)} placeholder="synopsis"/>
            
        
                <input type="text" name="poster_url" id="poster_url" value={this.state.poster_url} onChange={(event) => this.handleOnChange(event)} placeholder="image link"/>
            


                <select name="genre" id="genre" onChange={(event) => this.handleOnChange(event)}>{this.populateGenres()}</select>
                
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
const mapStateToProps = state => {
    return {
        ...state,
        genres: state.genreState.genres
    }
  }

export default connect(mapStateToProps, { addMovie, fetchGenres })(MovieNew)