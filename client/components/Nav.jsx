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
    //  console.log(this.tanks)
    return (
      <React.Fragment>
      <h1>Your tanks:</h1>
      <ul>
        {this.state.tanks.map(tank => {
          return <li key={tank.id}><Link to={`/${tank.id}`}>Tank: {tank.id}, {tank.litres} litres</Link></li>
        })}
      </ul>
      </React.Fragment>
    )
  }
}