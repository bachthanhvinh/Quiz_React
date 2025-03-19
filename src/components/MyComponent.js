import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  //JSX
  render() {
    const myInfor = ["ab", "c", "d"];
    return (
      <div>
        <UserInfor />
        <DisplayInfor name="zeck" age="22" />
        <hr />
        <DisplayInfor name="zeck" age={50} myInfor={myInfor} />
      </div>
    );
  }
}

export default MyComponent;
