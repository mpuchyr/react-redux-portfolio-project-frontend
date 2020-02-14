import React, { Component } from 'react'

let posterBG = ''

class MovieShowBackground extends Component {

    
    findMoviePoster = () => {
        let id = parseInt(this.props.id, 10)
        let movie = this.props.movies.find(movie => movie.id === id)
        if (movie) {
            return (
                <div className="poster-background">
                    <img src={movie.poster_url} alt={movie.title} ></img>
                </div>
            )
        }
    }
    
    render() {
        return (
            <>
                {this.findMoviePoster()}
            </>
        )
    }
}

export default MovieShowBackground