// Class component
// Function component

import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {

    state = {
        listUser: [
            {
                id: 1,
                name: "Nguyen Hoang A",
                age: 22
            },
            {
                id: 2,
                name: "Nguyen Hoang B",
                age: 23
            },
            {
                id: 3,
                name: "Nguyen Hoang C",
                age: 24
            }
        ]
    }

    // JSX
    render() {
        return (
            <div>
                <UserInfo />
                <br /> <br />
                <DisplayInfo listUser={this.state.listUser} />
            </div>
        )
    }
}

export default MyComponent;
