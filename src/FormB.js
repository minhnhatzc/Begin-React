import React, { Component } from "react";
class FormB extends Component {
  state = {
    name: "",
    email: "",
  };
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${this.state.name}\nEmail: ${this.state.email}`);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default FormB;
