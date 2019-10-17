import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import TankListing from './Tanks'
import FishListing from './Fish'
import AddFish from './AddFish.jsx'
import NewTank from './NewTank.jsx'

const App = () => {
  return (
    <Router>
      <div className='app'>
        
        <div className='container'>
          <h1>Welcome to your tanks!</h1>
          <div className="row">
          <div className="col-sm">
          <Route path='/' component={Nav} />
          </div>
          <div className="col-sm">
          <div className="content">
            <Route exact path='/' component={Home} />
            <Route path='/tanks/:id' component={TankListing} />
            </div>
            </div>
            <div className="col-sm">
            <Route path='/fish/:id' component={FishListing} />
            </div>
            <div className="col-sm">
            <Route path='/fish/add' component={AddFish} />
            <Route path='/newTank' component={NewTank} />
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App