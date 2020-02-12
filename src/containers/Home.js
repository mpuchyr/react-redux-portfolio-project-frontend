import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Home extends Component {
    renderMoviePosters = () => {
        if (this.props.loading) {
            return <p>Loading...</p>
        } else {
            return this.props.movies.map(movie => {
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

export default Home