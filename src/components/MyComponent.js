import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  //JSX
  state = {
    listUsers: [
      {
        id: 1,
        name: "zeck",
        age: "16",
      },
      {
        id: 2,
        name: "vinh",
        age: "22",
      },
      {
        id: 3,
        name: "Ckmoba",
        age: "60",
      },
    ],
  };
  handleAddNewUser = (userObj) => {
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };
  render() {
    return (
      <>
        <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
        <DisplayInfor
          listUsers={this.state.listUsers}
          users={this.state.listUsers}
        />
      </>
    );
  }
}

export default MyComponent;
