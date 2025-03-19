import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  //JSX
  state = {
    listUsers: [
      {
        id: 1,
        name: "zeck",
        age: "21",
      },
      {
        id: 2,
        name: "vinh",
        age: "22",
      },
      {
        id: 3,
        name: "Ckmoba",
        age: "23",
      },
    ],
  };
  render() {
    const myInfor = ["ab", "c", "d"];
    return (
      <div>
        <UserInfor />
        <DisplayInfor
          listUsers={this.state.listUsers}
          users={this.state.listUsers}
        />
      </div>
    );
  }
}

export default MyComponent;
