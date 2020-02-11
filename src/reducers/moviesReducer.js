export default(state = {movies: [], loading: false}, action) => {
    switch(action.type) {
        case 'LOADING_MOVIES':
            return {
                ...state,
                movies: [...state.movies],
                loading: true
            }
        case 'ADD_MOVIES':
            return {
                ...state,
                movies: action.payload,
                loading: false
            }
        default:
            return state
    }
}