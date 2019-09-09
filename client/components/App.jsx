// import React from 'react'

// import Tanks from './Tanks.jsx'

// import { getTanks, getTank } from '../apiClient'

// class App extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       tanks: []
//     }

//   }
//   componentDidMount() {
//     getTanks()
//     .then(tanks => {
//       this.setState({
//         tanks: tanks
//       })
//     })

//   }

//   render() {
//     return (
//       <div className='app'>
//         <h1>Welcome to your tanks!</h1>
//           <ul>
//             {this.state.tanks.map(tank => {
//               return <li key={tank.id}>Tank: {tank.id}, {tank.litres} litres</li>
//             })}
//           </ul>
//       </div>
//     )
//   }
// }

// export default App

import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import TankListing from './Tanks'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <h1>Welcome to your tanks!</h1>
        <div className='container'>
          <Route path='/' component={Nav} />
          <div className="content">
            <Route exact path='/' component={Home} />
            <Route path='/:id' component={TankListing} />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App