import React from "react";
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
  const { listUsers, users } = props;

  return (
    <>
      <div className="display-infor-container">
        {true && (
          <div>
            {listUsers.map((user, index) => {
              // console.log(">>>> check map user", user);

              return (
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
