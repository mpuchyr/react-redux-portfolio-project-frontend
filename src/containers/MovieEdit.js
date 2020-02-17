import React, { PureComponent } from 'react'
import { fetchGenres, fetchMovies, editMovie } from '../actions/index'
import { connect } from 'react-redux'

let html = document.querySelector("html")

class MovieEdit extends PureComponent {

    state = {
        title: '',
        synopsis: '',
        poster_url: '',
        genre_id: '',
        id: ''
    }

    componentDidMount() {
        this.props.fetchMovies()
        .then(res => {
            let paramsId = parseInt(this.props.match.params.id, 10)
            let movie = this.props.movies.find(movie => movie.id === paramsId)
            this.setState({
                title: movie.title,
                synopsis: movie.synopsis,
                poster_url: movie.poster_url,
                genre_id: movie.genre_id,
                id: movie.id
            })
        })
        this.props.fetchGenres()
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
        this.props.editMovie(this.state)
        this.props.history.push(`/movies/${this.state.id}`)
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
                        if (genre.id === this.state.genre_id) {
                            return (
                                <option value={genre.id} key={genre.id} selected>{genre.name}</option>
                            )
                        } else {
                            return (
                                <option value={genre.id} key={genre.id}>{genre.name}</option>
                            )
                        }

                    })
        )
    }



    render() {
        return (
            
            <div className="form-container">  
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <h3>Edit Movie</h3>
                    <label>Title: </label>
                    <input type="text" name="title" value={this.state.title} onChange={(event) => this.handleOnChange(event)}></input>
                    <br />
                    <label>Synopsis: </label>
                    <input type="text" name="synopsis" value={this.state.synopsis} onChange={(event) => this.handleOnChange(event)}></input>
                    <br />
                    <label>Image: </label>
                    <input type="text" name="poster_url" value={this.state.poster_url} onChange={(event) => this.handleOnChange(event)}></input>
                    <br />
                    <label>Genre: </label>
                    <select name="genre_id" id="genre" placeholder="genre" onChange={(event) => this.handleOnChange(event)}>{this.populateGenres()}</select>
                    <br />
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }

}



const mapStateToProps = state => {
    return {
      movies: state.movieState.movies,
      loading: state.movieState.loading,
      genres: state.genreState.genres
    }
  }

const mapDispatchToProps = dispatch => {
    return {
      fetchMovies: movies => dispatch(fetchMovies(movies)),
      fetchGenres: genres => dispatch(fetchGenres(genres)),
      editMovie: movie => dispatch(editMovie(movie))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(MovieEdit)