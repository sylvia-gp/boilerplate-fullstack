import React from 'react'

import { getTanks } from "../apiClient.js"
import { Link } from 'react-router-dom'

export default class TankListing extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tanks: []
        }
    }

    componentDidMount() {
        getTanks()
            .then(res => {
                this.setState({
                    tanks: res.body
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <h2>Welcome to tank {this.props.match.params.id}!</h2>
                <ul>
                    {this.state.tanks.map(tank => {
                        if (tank.id == this.props.match.params.id) {
                        return <img key={tank.id} src={tank.img} height='250' />
                        }
                    })}
                    <li><Link to={`/fish/${this.props.match.params.id}`}>Check out your fish</Link></li>
                    <li><Link to={`/tanks/${this.props.match.params.id}/cleaning`}>Update your cleaning roster</ Link></li>
                    <li>Wanna see your tank parameters?</li>
                </ul>
            </React.Fragment>
        )
    }
}