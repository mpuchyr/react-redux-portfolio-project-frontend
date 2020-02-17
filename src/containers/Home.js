import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions'


class Home extends Component {
    componentDidMount() {
        this.props.fetchMovies()
        .catch(err => {
          let container = document.querySelector('.main-container')
          container.innerText = "Something went wrong. Coult not connect to database. Please try again later."
        })
      }
    

    renderMoviePosters = () => {
        
        let movies = []
        if (this.props.loading) {
            return <p>Loading...</p>
        } else {
            if (this.props.movies.length > 0) {
              while (movies.length < 10) {
                let randNum = Math.floor(Math.random() * this.props.movies.length)
                let movie = this.props.movies[randNum]
                if (!movies.includes(movie)) {
                  movies.push(movie)
                }
              }
            }

            return movies.map(movie => {
                const link = `/movies/${movie.id}`
                return <NavLink to={link} key={movie.id}><img className="poster" src={movie.poster_url} key={movie.id} alt={movie.title}></img></NavLink>
            })
        }
    }

    render() {
        return(
            <div className="movies-container">
                <h1>Movie Archive</h1>
                <h3>10 Movie Picks For You</h3>
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
