// Class component
// Function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Nguyen Hoang Dat',
        address: 'Thai Binh',
        age: 22
    }

    handleClick(event) {
        console.log("Click me my button!")
        console.log(event)
    }
    handleOnMoverOver(event){
        console.log(event.pageX)
    }

    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onClick={this.handleClick}>Click Me</button>
                <button onMouseOver={this.handleOnMoverOver}>Hover Me</button>
            </div>
        )
    }
}

export default MyComponent;
