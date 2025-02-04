// Class component
// Function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Nguyen Hoang Dat',
        address: 'Thai Binh',
        age: 22
    }

    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        )
    }
}

export default MyComponent;
