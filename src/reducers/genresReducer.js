export default (state = {genres: []}, action) => {
    switch(action.type) {
        case "SET_GENRES":
            let newState = {
                ...state,
                genres: action.payload
            }
            return newState
        default:
            return state
    }
}