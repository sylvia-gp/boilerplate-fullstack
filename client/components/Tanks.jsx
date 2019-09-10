import React from 'react'

import {getTankById} from "../apiClient.js"
import { thisExpression } from '@babel/types';

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
            console.log(res.body)
            // this.setState = {
            //     tank: res.body
            // }
        })
    }

    render() {
        return(
            <div>
            <h1>Welcome to tank {this.props.match.params.id}!</h1>
            <p>Check out your fish</p>
            <p>Update your cleaning roster</p>
            <p>Wanna see your tank parameters?</p>
            </div>
        )
    }
}