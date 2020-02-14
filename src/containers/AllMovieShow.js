import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMovies, fetchGenres } from '../actions'

class AllMovieShow extends Component {

    componentDidMount() {
        this.props.fetchMovies()
        this.props.fetchGenres()
    }

    displayByGenre = () => {
        let genres = this.props.genres.sort( (a, b) => {
            if (a.name < b.name) {
                return -1
            } else if (a.name > b.name) {
                return 1
            } else {
                return 0
            }
        })
        return genres.map(genre => {
            return (
                <div>
                    <h1 key={genre.id}>{genre.name}</h1>
                
                    {this.showMoviesInGenre(genre.id)}
                </div>
            )
                
                
        })
    }

    showMoviesInGenre = (genreId) => {
        let movies = this.props.movies
        if (movies.length > 0) {
            movies = movies.sort( (a, b) => {
                let c = a.title
                let d = b.title
                const firstWord = ["a", "an", "the"]
                

                if (a.title && firstWord.includes(a.title.split(" ")[0].toLowerCase())) {
                    let aTitle = a.title.split(" ")
                    aTitle.splice(0, 1)
                    c = aTitle.join(" ")
                }

                if (b.title && firstWord.includes(b.title.split(" ")[0].toLowerCase())) {
                    let bTitle = b.title.split(" ")
                    bTitle.splice(0, 1)
                    d = bTitle.join(" ")
                }
                

                if (c && c.toLowerCase() > d.toLowerCase()) {
                    return 1
                } else if (c && c.toLowerCase() < d.toLowerCase()) {
                    return -1
                } else {
                    return 0
                }
            })
        }
        return movies.map(movie => {
            if (movie.genre_id === genreId) {
                const link = `/movies/${movie.id}`
                return <NavLink to={link} key={movie.id}><img className="poster" src={movie.poster_url} key={movie.id} alt={movie.title}></img></NavLink>
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