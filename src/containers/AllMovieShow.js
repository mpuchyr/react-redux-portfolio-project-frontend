import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMovies, fetchGenres } from '../actions'

class AllMovieShow extends Component {

    componentDidMount() {
        this.props.fetchGenres()
    }

    render() {
        console.log(this.props)
        return (
            <div></div>
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