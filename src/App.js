import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMovies } from './actions'
import Home from './containers/Home'

class App extends Component {
  componentDidMount() {
    this.props.fetchMovies()
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={ props => <Home {...props} movies={this.props.movies} loading={this.props.loading}/>} />
          </Switch>
        </div>
      </Router>
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
