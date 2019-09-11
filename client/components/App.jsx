import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import TankListing from './Tanks'
import FishListing from './Fish'
import AddFish from './AddFish.jsx'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <h1>Welcome to your tanks!</h1>
        <div className='container'>
          <Route path='/' component={Nav} />
          <div className="content">
            <Route exact path='/' component={Home} />
            <Route path='/tanks/:id' component={TankListing} />
            <Route path='/fish/:id' component={FishListing} />
            <Route path='/fish/add' component={AddFish} />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App