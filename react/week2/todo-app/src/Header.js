import React, { Component } from "react";

class Header extends Component {
  state = {
    inputValue: ""
  };

  inputChangeHandler = e => {
    const newText = e.target.value;
    this.setState({ inputValue: newText });
  };
  clickHandler = () => {
    const inputValue = this.state.inputValue;
    this.props.addItem(inputValue);
  };
  render() {
    const { inputValue } = this.state;
    return (
      <div className="header">
        <input
          placeholder="add text"
          value={inputValue}
          onChange={this.inputChangeHandler}
        />
        <button onClick={this.clickHandler}>Add Item</button>
      </div>
    );
  }
}
export default Header;
