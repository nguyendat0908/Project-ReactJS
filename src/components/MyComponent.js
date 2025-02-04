// Class component
// Function component

import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {

    // JSX
    render() {
        return (
            <div>
                <UserInfo/>
                <br/> <br/>
                <DisplayInfo name="Nguyen Hoang Dat" age="18"/>
            </div>
        )
    }
}

export default MyComponent;
