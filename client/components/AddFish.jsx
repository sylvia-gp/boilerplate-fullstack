import React from 'react'

export default class AddFish extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      species: '',
      quantity: '',
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit() {
    event.preventDefault()
  }

  render() {
  return (
    <div>
      <h1>Add a baby!</h1>
      <form method='POST' onSubmit={this.handleSubmit}>
        <label>Fish species: <input type="text" name="species" onChange={this.handleChange} /></label>
        <br></br>
        <br></br>
        <label>Quantity in tank: <input type="text" name ="quantity" onChange={this.handleChange} /></label>
        <br></br>
        <button>Add that boi</button>
      </form>
    </div>
  )
}
}