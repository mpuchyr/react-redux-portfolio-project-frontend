import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteMovie } from '../actions/index' 


class MovieShow extends Component {


    showMovie = () => {
        if (this.props.movies.length > 0) {
            let paramsId = parseInt(this.props.match.params.id, 10)
            let movie = this.props.movies.find(movie => movie.id === paramsId)
            if (movie) {
                return (
                    <div>
                        <img className="large-poster" src={movie.poster_url} alt={movie.title}></img>
                        <h1>{movie.title}</h1>
                        <p>{movie.synopsis}</p>
                        <button onClick={() => deleteMovie(movie.id)}>Delete</button>
                    </div>

                )
            } else {
                return <h1>Movie Not Found</h1>
            }
        } else {
            return <p>Loading..</p>
        }
    }

    render() {
        

        return (   
            <div>
                {this.showMovie()}
            </div>
        )
    }
}

export default connect (null, {deleteMovie})(MovieShow)


