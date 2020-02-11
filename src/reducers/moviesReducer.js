export default(state = {movies: [{title: "The Matrix", synopsis: "Whoa"}], loading: false}, action) => {
    switch(action.type) {
        case 'LOADING_MOVIES':
            return {

            }
        default:
            return state
    }
}