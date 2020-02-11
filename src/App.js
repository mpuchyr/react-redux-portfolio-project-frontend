import React, { Component } from 'react';
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
    console.log("Mounted!")
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

export default connect(mapStateToProps)(App);
