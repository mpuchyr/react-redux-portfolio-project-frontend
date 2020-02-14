import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteMovie } from '../actions/index' 
import MovieShowBackground from '../components/MovieShowBackground'


class MovieShow extends Component {

    componentDidMount() {
        this.scrollToTop()
    }

    scrollToTop = () => {
        window.scrollTo(0, 0);
        return null;
      }

    handleOnClick = (event) => {
        event.preventDefault()
        let answer = window.confirm("This movie will be deleted. Are you sure?")
        console.log(answer)
        if (answer === true) {
            this.props.deleteMovie(event.target.id)
            this.props.history.push('/movies')
        }
    }





    showMovie = () => {
        if (this.props.movies.length > 0) {
            let paramsId = parseInt(this.props.match.params.id, 10)
            let movie = this.props.movies.find(movie => movie.id === paramsId)
            if (movie) {
                return (
                    <>
                        <img className="large-poster" src={movie.poster_url} alt={movie.title}></img>
                        <h1>{movie.title}</h1>
                        <p>{movie.synopsis}</p>
                        <button id ={movie.id} onClick={event => this.handleOnClick(event)}>Delete</button>
                    </>

                )
            } else {
                return <h1>Movie Not Found</h1>
            }
        } else {
            return <p>Loading..</p>
        }
    }

    render() {
        return (   
            <div className="main">
                <MovieShowBackground movies={this.props.movies} id={this.props.match.params.id}/>
                 <div className="container">
                    {this.showMovie()}
                </div>
            </div>



        )
    }
}

export default connect (null, {deleteMovie})(MovieShow)


