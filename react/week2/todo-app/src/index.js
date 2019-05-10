import React, { Component } from "react";
import ReactDOM from "react-dom";
import List from "./List";
import Header from "./Header";
import "./index.css";

class App extends Component {
  state = {
    todoItems: [
      {
        task: "Get out of bed",
        time: "Wed Sep 13 2017"
      },
      {
        task: "Brush teeth",
        time: "Thu Sep 14 2017"
      },
      {
        task: "Eat breakfast",
        time: "Fri Sep 15 2017"
      }
    ]
  };

  addItem = newTask => {
    let dateFormat = require("dateformat");
    const today = new Date();

    const newtoDoItem = {
      task: newTask,
      time: dateFormat(today, "dddd, mmmm d, yyyy")
    };

    const newtoDoItems = this.state.todoItems.concat(newtoDoItem);
    this.setState({ todoItems: newtoDoItems });
  };
  deleteItem = item => {
    this.setState({
      todoItems: this.state.todoItems.filter(
        todoItem => todoItem.task !== item.task
      )
    });
  };
  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
        <h1>To Do List</h1>
        <Header addItem={this.addItem} />
        <List items={todoItems} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
