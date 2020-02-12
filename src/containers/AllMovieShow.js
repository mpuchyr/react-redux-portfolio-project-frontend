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
                <h1 key={genre.id}>{genre.name}</h1>

            )
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