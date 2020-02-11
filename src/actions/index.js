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