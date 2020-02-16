import React, { Component } from 'react'
import { fetchGenres } from '../actions/index'
import { connect } from 'react-redux'

class MovieEdit extends Component {






    render() {
        return (
            <div>

            </div>
        )
    }

}



const mapStateToProps = state => {
    return {
        ...state,
        genres: state.genreState.genres
    }
  }

export default connect(mapStateToProps, { fetchGenres })(MovieEdit)