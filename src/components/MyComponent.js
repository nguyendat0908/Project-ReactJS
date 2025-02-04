// Class component
// Function component

import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {

    state = {
        listUser: [
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
    }

    handleAddNewUser = (userObject) => {
        this.setState({
            listUser: [userObject, ...this.state.listUser]
        })
    }

    // JSX
    render() {
        return (
            <div>
                <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
                <br /> <br />
                <DisplayInfo listUser={this.state.listUser}/>
            </div>
        )
    }
}

export default MyComponent;
