import React from "react";

class DisplayInfo extends React.Component {
    render (){
        return (
            <div>
                <div>My name's {this.props.name}</div>
                <div>My age's {this.props.age}</div>
            </div>
        )
    }
}

export default DisplayInfo