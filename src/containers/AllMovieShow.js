import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMovies, fetchGenres } from '../actions'
import GenreNavBar from '../components/GenreNavBar'


let topBtn = ''


class AllMovieShow extends Component {

    componentDidMount() {
        this.props.fetchMovies()
        this.props.fetchGenres()
        .catch(err => {
            let container = document.querySelector('.main-container')
            if (container) {
                container.innerText = "Something went wrong. Could not connect to the database. Please try again later."
            }

        })
        topBtn = document.querySelector('#to-top-button')
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
                    <a name={genre.name}></a>
                    <br />
                    <br />
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

    handleOnClick = (event) => {
        window.scrollTo(0, 0);
        return null;
    }

    handleOnScroll = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            topBtn.style.display = "block"
        } else {
            topBtn.style.display = "none"
        }
    }

    render() {
        window.onscroll = () => {this.handleOnScroll()}
        return (
            <div className="movies-container">
                <GenreNavBar genres={this.props.genres} />
                {this.displayByGenre()}
                <button id="to-top-button" onClick={event => this.handleOnClick(event)}>Back to Top</button>
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