import React, { Component } from "react";

class List extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map(todoItem => (
          <li>
            {todoItem.task + ",  " + todoItem.time}
            <button onClick={e => this.props.deleteItem(todoItem)}>
              Delete Task
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default List;
