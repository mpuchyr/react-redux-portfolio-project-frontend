import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavLink to="/">Home</NavLink>
                <br />
                <NavLink to="/movies">All Movies</NavLink>
                <br />
                <NavLink to="/movies/new">Add a Movie</NavLink>
            </div>
        )
    }
}

export default NavBar