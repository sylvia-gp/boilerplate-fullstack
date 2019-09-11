import React from 'react'
import{Link} from 'react-router-dom'

import {getTanks} from '../apiClient.js'

export default class Nav extends React.Component{
  constructor (props){
    super(props)
    
    this.state = {
    tanks: []
  }
}

  componentDidMount(){
    getTanks()
    .then(res => {
      this.setState ({
        tanks: res.body
      }
      )
    })
  }

  render() {
    return (
      <React.Fragment>
      <h2>Your tanks:</h2>
      <ul>
        {this.state.tanks.map(tank => {
          return <li key={tank.id}><Link to={`/tanks/${tank.id}`}>Tank: {tank.id}, {tank.litres} litres</Link></li>
        })}
      </ul>
      </React.Fragment>
    )
  }
}