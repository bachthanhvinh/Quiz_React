import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";
//stateless vs stateful
// class DisplayInfor extends React.Component {
//   render() {
//     console.log(">> call me render : ");
//     // distructuring
//     const { listUsers, users } = this.props;
//     return (
//       <>
//         <div className="display-infor-container">
//           {true && (
//             <div>
//               {listUsers.map((user, index) => {
//                 // console.log(">>>> check map user", user);

//                 return (
//                   <div
//                     key={user.id}
//                     className={+user.age > 18 ? "green" : "red"}
//                   >
//                     <div>My name {user.name} </div>
//                     <div>My age {user.age}</div>
//                     <div>
//                       <button
//                         onClick={() => this.props.handleDeleteUser(user.id)}
//                       >
//                         X
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUser, users } = props;
  const [isShowHileListUser, setShowHileListUser] = useState(true);
  const handleShowUser = () => {
    setShowHileListUser(!isShowHileListUser);
  };

  console.log(">>> call me render");

  useEffect(() => {
    if (listUser.length === 0) {
      alert("You deleted all the users");
    }
    console.log(">>> call me useEffect");
  }, [listUser]);
  return (
    <>
      <div className="display-infor-container">
        <div>
          <span onClick={() => handleShowUser()}>
            {isShowHileListUser === true ? "Hile-users" : "Show-list-users"}
          </span>
        </div>
        {isShowHileListUser && (
          <div>
            {listUser.map((user, index) => {
              return (
                // console.log(">>>> check map user", user.name);
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name {user.name} </div>
                  <div>My age {user.age}</div>
                  <div>
                    <button onClick={() => props.handleDeleteUser(user.id)}>
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
};

export default DisplayInfor;
