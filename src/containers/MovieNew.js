import React, { Component } from 'react'
import { addMovie } from '../actions/index'
import { connect } from 'react-redux'

class MovieNew extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            synopsis: '',
            poster_url: ''
        }
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

export default connect()(MovieNew)