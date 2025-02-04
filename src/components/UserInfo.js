import React from "react";

class UserInfo extends React.Component {

    state = {
        name: 'Nguyen Hoang Dat',
        address: 'Thai Binh',
        age: 22
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        alert('me')
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input value={this.state.name} onChange={(event) => this.handleOnChangeInput(event)} type="text" />
                    <button>Submit</button>

                    <label>Your age: </label>
                    <input value={this.state.age} onChange={(event) => this.handleOnChangeAge(event)} type="text" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfo