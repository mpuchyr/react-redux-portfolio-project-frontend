export default(state = {movies: [], loading: false}, action) => {
    switch(action.type) {
        case 'LOADING_MOVIES':
            return {

            }
        default:
            return state
    }
}