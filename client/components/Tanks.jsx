import React from 'react'

import { getTankById } from "../apiClient.js"
import { Link } from 'react-router-dom'

export default class TankListing extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tank: {}
        }
    }

    componentDidMount() {
        getTankById(this.props.match.params.id)
            .then(res => {
                this.setState({
                    tank: res.body[0]
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <h2>Welcome to tank {this.props.match.params.id}!</h2>
                <img src={this.state.tank.img} height='250' />
                <ul>
                    <li><Link to={`/fish/${this.props.match.params.id}`}>Check out your fish</Link></li>
                    <li><Link to={`/tanks/${this.props.match.params.id}/cleaning`}>Update your cleaning roster</ Link></li>
                    <li>Wanna see your tank parameters?</li>
                </ul>
            </React.Fragment>
        )
    }
}