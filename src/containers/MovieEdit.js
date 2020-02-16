import React, { Component } from 'react'
import { fetchGenres } from '../actions/index'
import { connect } from 'react-redux'

class MovieEdit extends Component {




    findMovie = () => {
        if (this.props.movies.length > 0) {
            let paramsId = parseInt(this.props.match.params.id, 10)
            let movie = this.props.movies.find(movie => movie.id === paramsId)
            if (movie) {
                this.setState({
                    id: movie.id,
                    title: movie.title,
                    synopsis: movie.synopsis,
                    poster_url: movie.poster_url,
                    genre_id: movie.genre_id
                })
            }
        }
    }




    render() {
        return (
            <div>
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

export default connect(mapStateToProps, { fetchGenres })(MovieEdit)