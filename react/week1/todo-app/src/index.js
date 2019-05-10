import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./index.css";
class App extends Component {
  render() {
    const toDoList = [
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
    ];
    return (
      <div className="App">
        <h1>To Do List</h1>
        <form>
          <ul>
            {toDoList.map(todoItem => (
              <li>{todoItem.task + ",  " + todoItem.time}</li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
