import React from 'react'

import { newTank } from '../apiClient.js'

export default class NewTank extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            litres: "",
            img: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const tank = {
            litres: this.state.litres,
            img: this.state.img
        }
        newTank(tank)
    }

    render() {
        return (
            <div>
                <h2>Add a tank!</h2>
                <form method="POST" onSubmit={this.handleSubmit}>
                        <label>
                            Image URL: {" "}
                            <input
                                type="text"
                                name="img"
                                value={this.state.img}
                                onChange={this.handleChange}
                            />
                        </label>
                        <label>
                            Litres in tank: {" "}
                            <input
                                type="text"
                                name="litres"
                                value={this.state.litres}
                                onChange={this.handleChange}
                            />
                        </label>
                        <input type='submit' value='Add that sweet tank' />
                </form>
            </div>
        )
    }
}