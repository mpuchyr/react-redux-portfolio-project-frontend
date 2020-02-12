import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions'


class Home extends Component {
    componentDidMount() {
        this.props.fetchMovies()
      }
    
    renderMoviePosters = () => {
        if (this.props.loading) {
            return <p>Loading...</p>
        } else {
            return this.props.movies.map(movie => {
                console.log(movie)
                const link = `/movies/${movie.id}`
                return <NavLink to={link} key={movie.id}><img src={movie.poster_url} key={movie.id} alt={movie.title}></img></NavLink>
            })
        }
    }

    render() {
        return(
            <div>
                <h1>Movie Archive</h1>
                {this.renderMoviePosters()}
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
