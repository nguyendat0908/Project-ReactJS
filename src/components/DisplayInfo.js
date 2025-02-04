import React from "react";
import './DisplayInfo.scss';
import logo from './../logo.svg'

class DisplayInfo extends React.Component {

    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })

    }

    render() {

        const { listUser } = this.props;
        console.log(listUser)

        return (
            <div className="display-info-container">

                <img src={logo}/>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list user" : "Show list user"}
                    </span>
                </div>

                {this.state.isShowListUser &&
                    <div>
                        {listUser.map((user) => {

                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfo