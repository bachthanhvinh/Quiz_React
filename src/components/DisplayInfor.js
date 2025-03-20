import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";
class DisplayInfor extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };

  render() {
    // console.log(this.props);
    // distructuring
    const { listUsers, users } = this.props;
    return (
      <>
        <div className="display-infor-container">
          <img src={logo} />
          <div>
            <span
              onClick={(e) => {
                this.handleShowHide();
              }}
            >
              {this.state.isShowListUser === true
                ? "Hide list users: "
                : "Show list users:"}
            </span>
          </div>
          {this.state.isShowListUser && (
            <div>
              {listUsers.map((user, index) => {
                // console.log(">>>> check map user", user);

                return (
                  <div
                    key={user.id}
                    className={+user.age > 18 ? "green" : "red"}
                  >
                    <div>My name {user.name} </div>
                    <div>My age {user.age}</div>
                    <hr />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </>
    );
  }
}

export default DisplayInfor;
