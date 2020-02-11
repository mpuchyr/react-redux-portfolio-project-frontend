import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchMovies } from './actions'

class App extends Component {
  componentDidMount() {
    this.props.fetchMovies()
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movieState.movies,
    loading: state.movieState.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: movies => dispatch(fetchMovies(movies))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
