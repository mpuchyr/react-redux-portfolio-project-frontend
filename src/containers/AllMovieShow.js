import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMovies, fetchGenres } from '../actions'

class AllMovieShow extends Component {

    componentDidMount() {
        this.props.fetchGenres()
    }

    displayByGenre = () => {

        return this.props.genres.map(genre => {
            return (
                <div>
                    <h1 key={genre.id}>{genre.name}</h1>
                
                    {this.showMoviesInGenre(genre.id)}
                </div>
            )
                
                
        })
    }

    showMoviesInGenre = (genreId) => {
        return this.props.movies.map(movie => {
            if (movie.genre_id === genreId) {
                return <img key={movie.id} src={movie.poster_url} alt={movie.title}></img>
            }
        })
    }

    render() {
        return (
            <div>
                {this.displayByGenre()}
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
      fetchGenres: genres => dispatch(fetchGenres(genres))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AllMovieShow)