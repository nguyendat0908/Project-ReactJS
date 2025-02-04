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
        console.log("My name is ", this.state.name)

        this.setState({
            name: 'DatLeo',
            age: Math.floor((Math.random() * 100) + 1)
        })
    }
    handleOnMoverOver(event){
        console.log(event.pageX)
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        alert('me')
    }

    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input onChange={(event) => this.handleOnChangeInput(event)} type="text" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default MyComponent;
