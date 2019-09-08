import React from 'react'
import request from 'superagent'

import Tanks from './Tanks.jsx'

import { getTanks } from '../apiClient'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tanks: []
    }

  }
  componentDidMount() {
    console.log('this is where we call our api')
    request.get('/api/v1/tanks/')
    .then(response => {
      const tanks = response.body
      this.setState({
        tanks: tanks
      })
    })
  }

  render() {
    return (
      <div className='app'>
        <h1>Welcome to your tanks!</h1>
          <ul>
            {this.state.tanks.map(tank => {
              return <li key={tank.id}>Tank: {tank.id}, {tank.litres} litres</li>
            })}
          </ul>
      </div>
    )
  }
}

export default App
