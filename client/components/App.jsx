import React from 'react'

import { getTanks } from '../apiClient'

class App extends React.Component {
  // state = {
  //   tanks: []
  // }

  // componentDidMount () {
  //   getTanks()
  //     .then(tanks => {
  //       this.setState({tanks})
  //     })
  // }

  render () {
    return (
      <div className='app'>
        <h1>Welcome to your tanks!</h1>
        <ul>
          {/* {this.state.tanks.map(tank => (
            <li key={tank.id}>{tank}</li> */}
          {/* ))} */}
          
        </ul>
      </div>
    )
  }
}

export default App
