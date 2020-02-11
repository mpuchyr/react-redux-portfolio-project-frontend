import React, { Component } from 'react'

class Home extends Component {
    renderMoviePosters = () => {
        if (this.props.loading) {
            return <p>Loading...</p>
        } else {
            return this.props.movies.map(movie => {
                return <img src={movie.poster_url} key={movie.id} alt={movie.title}></img>
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

export default Home