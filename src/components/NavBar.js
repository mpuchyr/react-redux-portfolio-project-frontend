import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <NavLink to="/">Home</NavLink>

                <NavLink to="/movies">All Movies</NavLink>

                <NavLink to="/movies/new">Add a Movie</NavLink>
            </div>
        )
    }
}

export default NavBar