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
    console.log(`random `);
    // console.log(e);

    //merge State => react class
    this.setState({
      name: "vinh",
      age: Math.floor(Math.random() * 100 + 1),
    });

    // this.setState({
    //   age: Math.floor(Math.random() * 100 + 1),
    // });
  }
  handleOnMoverOver(event) {
    console.log(event);
  }
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <button onMouseOver={this.handleOnMoverOver}>Click me</button>
        <button
          onClick={(e) => {
            this.handleClick(e);
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default MyComponent;
