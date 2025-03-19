import React from "react";
class DisplayInfor extends React.Component {
  render() {
    console.log(this.props);
    // distructuring
    const { listUsers, users } = this.props;
    return (
      <div>
        {listUsers.map((user, index) => {
          return (
            <div key={user.id}>
              <div>My name {user.name} </div>
              <div>My age {user.age}</div>
              <hr />
            </div>
          );
        })}
        {/* <div>My name </div>
        <div>My age </div>
        <hr /> */}
      </div>
    );
  }
}

export default DisplayInfor;
