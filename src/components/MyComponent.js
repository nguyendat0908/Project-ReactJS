// Class component
// Function component

import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

// class MyComponent extends React.Component {

//     state = {
//         listUser: [
//             {
//                 id: 1,
//                 name: "Nguyen Hoang A",
//                 age: "16"
//             },
//             {
//                 id: 2,
//                 name: "Nguyen Hoang B",
//                 age: "23"
//             },
//             {
//                 id: 3,
//                 name: "Nguyen Hoang C",
//                 age: "70"
//             }
//         ]
//     }

//     handleAddNewUser = (userObject) => {
//         this.setState({
//             listUser: [userObject, ...this.state.listUser]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         let listUsersClone = this.state.listUser;
//         listUsersClone = listUsersClone.filter(item => item.id !== userId);
//         this.setState({
//             listUser: listUsersClone
//         })
//     }

//     // JSX
//     render() {
//         return (
//             <div>
//                 <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
//                 <br /> <br />
//                 <DisplayInfo
//                     listUser={this.state.listUser}
//                     handleDeleteUser={this.handleDeleteUser}
//                 />
//             </div>
//         )
//     }
// }

const MyComponent = (props) => {

    const [listUser, setListUser] = useState(
        [
            {
                id: 1,
                name: "Nguyen Hoang A",
                age: "16"
            },
            {
                id: 2,
                name: "Nguyen Hoang B",
                age: "23"
            },
            {
                id: 3,
                name: "Nguyen Hoang C",
                age: "70"
            }
        ]
    );

    const handleAddNewUser = (userObject) => {
        setListUser([userObject, ...listUser])
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUser;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setListUser(listUsersClone)
    }

    return (
        <div>
            <AddUserInfo handleAddNewUser={handleAddNewUser} />
            <br /> <br />
            <DisplayInfo
                listUser={listUser}
                handleDeleteUser={handleDeleteUser}
            />
        </div>
    )
}

export default MyComponent;
