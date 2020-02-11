import React from 'react';
import { connect } from 'react-redux'

function App(props) {
  return (
    <div className="App">
      <p>{props.movies[0].title}</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    movies: state.movieState.movies
  }
}

export default connect(mapStateToProps)(App);
