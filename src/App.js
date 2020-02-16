import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import Home from './containers/Home'
import MovieShow from './containers/MovieShow'
import MovieNew from './containers/MovieNew'
import AllMovieShow from './containers/AllMovieShow'
import MovieEdit from './containers/MovieEdit'
import { fetchMovies } from './actions'
class App extends Component {

  componentDidMount() {
    this.props.fetchMovies()
  }



  render() {

  

    return (
      <Router>
        <NavBar />
        <div className="main-container">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/movies" component={ AllMovieShow } />
            <Route exact path="/movies/new" component={ MovieNew } />
            <Route exact path="/movies/:id" render={ props => <MovieShow {...props} movies={this.props.movies}/>} />
            <Route exact path="/movies/:id/edit" render={props => <MovieEdit {...props} movies={this.props.movies}/>} />
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


export default connect(mapStateToProps, mapDispatchToProps)(App)

