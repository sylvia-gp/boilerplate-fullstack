import React from 'react'
import { Link } from 'react-router-dom'

import { deleteFish, getFishByTankId } from "../apiClient.js"


export default class FishListing extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fishes: []
    }
  }

  componentDidMount() {
    getFishByTankId(this.props.match.params.id)
      .then(res => {
        this.setState({
          fishes: res.body
        })
      })
  }

  deleteFish() {
    deleteFish(id)
  }

  render() {
    return (
      <React.Fragment>
        {console.log(this.props)}
        <h2>Here are some fish</h2>
        <ul>
          {this.state.fishes.map(fish => {
            return <li key={fish.id}>
              <img src={fish.image} height='200' />
              <p>
                Fish: {fish.species} - Number in tank: {fish.quantity}
              </p>
            <button onClick={this.deleteFish(fish.id)}>Delete Fish</button>
            <button>Edit Fish</button></li>
          })}
        </ul>
        <Link to="/fish/add">Wanna add a fish? Click here!</Link>
      </React.Fragment>
    )
  }
}