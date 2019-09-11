import React from "react";
import { newFish } from "../apiClient.js";

export default class AddFish extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
      species: "",
      quantity: "",
      tank_id: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const fish = {
      image: this.state.image,
      species: this.state.species,
      quantity: this.state.quantity,
      tank_id: this.state.tank_id
    };
    newFish(fish);
  }

  render() {
    return (
      <div>
        <h2>Add a baby!</h2>
        <form method="POST" onSubmit={this.handleSubmit}>
          <p>
            <label>
              Image URL:{" "}
              <input
                type="text"
                name="image"
                value={this.state.image}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Fish Species:{" "}
              <input
                type="text"
                name="species"
                value={this.state.species}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Quantity in tank:{" "}
              <input
                type="text"
                name="quantity"
                value={this.state.quantity}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Which tank number are they in?{" "}
              <input
                type="text"
                name="tank_id"
                value={this.state.tank_id}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <input type="submit" value="Add that fish!" />
        </form>
      </div>
    );
  }
}
