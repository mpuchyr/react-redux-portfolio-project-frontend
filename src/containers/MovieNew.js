import React, { Component } from 'react'
import { addMovie, fetchGenres } from '../actions/index'
import { connect } from 'react-redux'

let html = document.querySelector('html')

class MovieNew extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            synopsis: '',
            poster_url: '',
            genre: 'Action'
        }
    }

    componentDidMount() {
        {this.props.fetchGenres()}
        html.style.overflow = "hidden"
        
    }

    componentWillUnmount() {
        html.style.overflow = "auto"
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addMovie(this.state)
        this.props.history.push('/movies')
    }

    populateGenres = () => {
        let genres = this.props.genres.sort( (a, b) => {
            if (a.name < b.name) {
                return -1
            } else if (a.name > b.name) {
                return 1
            } else {
                return 0
            }
        })
        return (

                 genres.map(genre => {
                        return (
                            <option value={genre.name} key={genre.id}>{genre.name}</option>
                        )
                    })
        )
    }


    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleOnSubmit}>
                    <h3>Add a Movie</h3>
            
                    <input type="text" name="title" id="title" value={this.state.title} onChange={(event) => this.handleOnChange(event)} placeholder="title"/>
                    <br />
            
                    <input type="text" name="synopsis" id="synopsis" value={this.state.synopsis} onChange={(event) => this.handleOnChange(event)} placeholder="synopsis"/>
                    <br />

                    <input type="text" name="poster_url" id="poster_url" value={this.state.poster_url} onChange={(event) => this.handleOnChange(event)} placeholder="image link"/>
                    <br />


                    <select name="genre" id="genre" placeholder="genre" onChange={(event) => this.handleOnChange(event)}>{this.populateGenres()}</select>
                    <br />
                    <input type="submit" value="Add Movie"></input>
                </form>
            </div>

        )
    }
}


const mapStateToProps = state => {
    return {
        ...state,
        genres: state.genreState.genres
    }
  }

export default connect(mapStateToProps, { addMovie, fetchGenres })(MovieNew)