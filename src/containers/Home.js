import React, { Component } from 'react'

class Home extends Component {
    
    showPosters = () => {
        if (this.props.loading) {
            <p>Loading Movies...</p>
        } else {
            return this.props.movies.map(movie => {
                return <img src={movie.poster_src} alt={movie.title} />
            })
        }
    }
    
    render() {
        return(
            <div>
                <h1>Movie Archive</h1>
                
            </div>
        )
    }
}

export default Home