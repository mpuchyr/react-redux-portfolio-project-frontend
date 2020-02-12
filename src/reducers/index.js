import { combineReducers } from 'redux'
import movieState from './moviesReducer'
import genreState from './genresReducer'

export default combineReducers({
    movieState,
    genreState
})