import React from "react";
class AddUserInfor extends React.Component {
  state = {
    name: "Zeck",
    address: "Thanhvinh",
    age: 21,
  };

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeAge = (event) => {
    // bad code
    // this.state.age = event.target.value
    this.setState({
      age: event.target.value,
    });
    // console.log(event);
  };
  handleOnSubmit = (event) => {
    event.preventDefault();

    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "random",
      name: this.state.name,
      age: this.state.age,
    });
  };
  render() {
    return (
      <>
        My name is {this.state.name} and I'm {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your name:</label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <label>Your age:</label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default AddUserInfor;
