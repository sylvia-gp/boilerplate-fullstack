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
            console.log(res)
            // this.setState = {
            //     tank: res.body
            // }
        })
    }

    render() {
        return(
            
            <h1>This is the tanks jsx for tank{this.props.match.params.id}</h1>
        )
    }
}