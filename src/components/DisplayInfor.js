import React from "react";
class DisplayInfor extends React.Component {
  render() {
    console.log(this.props);
    const { age, name } = this.props;
    return (
      <div>
        <div>My name {name}</div>
        <div>My age {age}</div>
      </div>
    );
  }
}

export default DisplayInfor;
