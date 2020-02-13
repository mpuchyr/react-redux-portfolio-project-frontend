export default(state = {movies: [], loading: false}, action) => {
    switch(action.type) {
        case 'LOADING_MOVIES':
            return {
                ...state,
                movies: [...state.movies],
                loading: true
            }
        case 'SET_MOVIES':
            return {
                ...state,
                movies: action.payload,
                loading: false
            }
        case 'ADD_MOVIE':
            let newState = {
                ...state,
                movies: [...state.movies, action.payload]
            }    
        
            return newState
        case 'DELETE_MOVIE':
            let newMovies = state.movies.filter(movie => movie.id !== action.payload)
            let newMovieState = {
                ...state,
                movies: newMovies
            }
            return newMovieState
        default:
            return state
    }
}