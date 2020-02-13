export const fetchMovies = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_MOVIES"})
        return fetch('http://localhost:3000/movies')
        .then(res => res.json())
        .then(movies => {
            dispatch({type: "SET_MOVIES", payload: movies})
        })
    }
}

export const addMovie = (movie) => {
    return (dispatch) => {
        return fetch('http://localhost:3000/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: movie.title,
                synopsis: movie.synopsis,
                poster_url: movie.poster_url,
                genre: movie.genre
            })
        })
        .then(res => res.json())
        .then(movie => {
            console.log(movie)
            dispatch({type: "ADD_MOVIE", payload: movie})
        })
    }
}

export const fetchGenres = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/genres')
        .then(res => res.json())
        .then(genres => {
            dispatch({type: "SET_GENRES", payload: genres})
        })
    }
}

export const deleteMovie = (movieId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(movie => {
            dispatch({type: 'DELETE_MOVIE', payload: movie.id})
        })
    }
}