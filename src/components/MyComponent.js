import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//   //JSX
//   state = {
//     listUsers: [
//       {
//         id: 1,
//         name: "zeck",
//         age: "16",
//       },
//       {
//         id: 2,
//         name: "vinh",
//         age: "22",
//       },
//       {
//         id: 3,
//         name: "Ckmoba",
//         age: "60",
//       },
//     ],
//   };
//   handleAddNewUser = (userObj) => {
//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };
//   handleDeleteUser = (userId) => {
//     let listUserClone = [...this.state.listUsers];
//     listUserClone = listUserClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUserClone,
//     });
//   };
//   render() {
//     return (
//       <>
//         <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//         <DisplayInfor
//           listUsers={this.state.listUsers}
//           users={this.state.listUsers}
//           handleDeleteUser={this.handleDeleteUser}
//         />
//       </>
//     );
//   }
// }

const listUsers = [
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
];
const MyComponent = () => {
  const [listUser, setListUser] = useState(listUsers);

  const handleAddNewUser = (userObj) => {
    setListUser([userObj, ...listUser]);
  };

  const handleDeleteUser = (userId) => {
    let listUserClone = [...listUser];
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    setListUser(listUserClone);
  };
  return (
    <>
      <AddUserInfor handleAddNewUser={handleAddNewUser} />
      <DisplayInfor
        listUser={listUser}
        users={listUser}
        handleDeleteUser={handleDeleteUser}
      />
    </>
  );
};

export default MyComponent;
