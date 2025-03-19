import React from "react";

class MyComponent extends React.Component {
  //JSX
  state = {
    name: "Zeck",
    address: "Thanhvinh",
    age: 21,
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
      </div>
    );
  }
}

export default MyComponent;
