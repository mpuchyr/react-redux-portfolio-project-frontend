import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './containers/Home'
import MovieShow from './containers/MovieShow'
import MovieNew from './containers/MovieNew'
import AllMovieShow from './containers/AllMovieShow'
import MovieEdit from './containers/MovieEdit'

class App extends Component {


  render() {

  

    return (
      <Router>
        <NavBar />
        <div className="main-container">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/movies" component={ AllMovieShow } />
            <Route exact path="/movies/new" component={ MovieNew } />
            <Route exact path="/movies/:id" component={ MovieShow } />
            <Route exact path="/movies/:id/edit" component={ MovieEdit } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App

