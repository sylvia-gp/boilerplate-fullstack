import React from 'react'

import {getTankById} from "../apiClient.js"
import{Link} from 'react-router-dom'

export default class TankListing extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            tank: ''
        }
    }

    componentDidMount() {
        getTankById(this.props.match.params.id)
        .then(res => {
            this.setState = {
                tank: res.body
            }
        })
    }

    render() {
        return(
            <div>
            <h1>Welcome to tank {this.props.match.params.id}!</h1>
            <ul>
            <li><Link to={`/fish/${this.props.match.params.id}`}>Check out your fish</Link></li>
            <li>Update your cleaning roster</li>
            <li>Wanna see your tank parameters?</li>
            </ul>
            </div>
        )
    }
}