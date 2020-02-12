export const fetchMovies = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_MOVIES"})
        fetch('http://localhost:3000/movies')
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
            body: JSON.stringifty({movie: movie})
        })
        .then(res => res.json())
        .then(movie => {
            dispatch({type: "ADD_MOVIE", payload: movie})
        })
    }
}