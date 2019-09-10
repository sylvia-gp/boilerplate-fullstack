import React from 'react'
import { Link } from 'react-router-dom'

import { getFishByTankId } from "../apiClient.js"


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

  render() {
    return (
      <React.Fragment>
        <h1>Here are some fish</h1>
        <ul>
          {this.state.fishes.map(fish => {
            return <li key={fish.id}><img src={fish.image} height='200' /><p>Fish: {fish.species} - Number in tank: {fish.quantity}</p></li>
          })}
        </ul>
      </React.Fragment>
    )
  }
}