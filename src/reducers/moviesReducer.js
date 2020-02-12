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
            return {
                ...state,
                movies: [...state.movies, action.payload],
            }
        default:
            return state
    }
}