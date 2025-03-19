import React from "react";

class MyComponent extends React.Component {
  //JSX
  state = {
    name: "Zeck",
    address: "Thanhvinh",
    age: 21,
  };

  handleClick(e) {
    console.log(">>> click me my button");
    console.log(`My name is  `, this.state.name);
    // console.log(e);
  }
  handleOnMoverOver(event) {
    console.log(event);
  }
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
        <button onMouseOver={this.handleOnMoverOver}>Click me</button>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;
