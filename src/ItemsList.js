import React, { Component } from "react";

class ItemsList extends Component {
  state = {
    items: [
      { id: 1, name: "item1" },
      { id: 2, name: "item2" },
      { id: 3, name: "item3" },
      { id: 4, name: "item4" },
    ],
  };
  handleDelete = (id) => {
    const updatedItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: updatedItems });
  };
  render() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => this.handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}
export default ItemsList;
