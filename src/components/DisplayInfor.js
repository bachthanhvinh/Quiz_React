import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";
class DisplayInfor extends React.Component {
  constructor(props) {
    console.log("call constructor: 1");
    super(props);
    this.state = {
      isShowListUser: true,
    };
  }

  componentDidMount() {
    console.log(">>> call me component did mount");
    setTimeout(() => {
      document.title = "học lập trình";
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(">>> call me component did update", this.props, prevState);

    if (this.props.listUsers !== prevProps.listUsers) {
      if (this.props.listUsers.length === 5) {
        alert("You got 5 users");
      }
    }
  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };

  render() {
    console.log(">> call me render : ");
    // distructuring
    const { listUsers, users } = this.props;
    return (
      <>
        <div className="display-infor-container">
          {/* <img src={logo} /> */}
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
                    <div>
                      <button
                        onClick={() => this.props.handleDeleteUser(user.id)}
                      >
                        X
                      </button>
                    </div>
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
