import React from "react";

export default class TestingComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "Mayank"
        }
    }

    updateName = () => {
        this.setState({
            name: "Anshul"
        })
    }

    render() {
        return (
            <>
                <div id="sampleComponent">
                    <h2>Hello {this.props.name}</h2>
                    <h3 className="userName">{this.state.name}</h3>
                    <input type="button" onClick={this.updateName} id="updateNameButton" value="Click" />
                </div>
            </>
        )
    }
} 