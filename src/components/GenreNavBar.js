import React, { Component } from 'react'

class GenreNavBar extends Component {
    
    createGenreLinks = () => {
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
            let genreLink = `#${genre.name}` 
            return (
                <>
                    <a href={genreLink}><button>{genre.name}</button></a>
                
                    {this.showMoviesInGenre(genre.id)}
                </>
            )
                
                
        })
    }
    
    render() {
        return(
            <div className="genre-nav-bar">
                {this.createGenreLinks()}
            </div>
        )
    }
}

export default GenreNavBar