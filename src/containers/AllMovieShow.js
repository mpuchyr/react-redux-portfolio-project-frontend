import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions'

class AllMovieShow extends Component {

    render() {
        return (
            <div></div>
        )
    }
}

const mapStateToProps = state => {
    return {
      movies: state.movieState.movies,
      loading: state.movieState.loading
    }
  }

const mapDispatchToProps = dispatch => {
    return {
      fetchMovies: movies => dispatch(fetchMovies(movies))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AllMovieShow)