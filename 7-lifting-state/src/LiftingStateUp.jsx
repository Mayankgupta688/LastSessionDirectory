import React from 'react';

export default class LiftingStateUp extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank"
        } 
    }

    updateName = (newName) => {
        this.setState({
            name: newName
        })
    }

    updateChildFunc() {
        this.updateChild()
    }

    updateChild = {
        sampleFn: null
    };

    render() {
        return (
            <div>
                <h1>User Name: {this.state.name}</h1>
                <input type="button" value="Update Parent" onClick={this.updateChildFunc} />
                <ChildComponent updateChild={this.updateChild} updateName={this.updateName} name={this.state.name}></ChildComponent>
            </div>
        )
    }
}

class ChildComponent extends React.Component {

    constructor(props) {
        super(props);
        this.props.updateChild.sampleFn = this.updateChild.bind(this);
    }

    updateChild() {
        alert("Child Triggerd...")
    }

    render() {
        return (
            <div>
                <h2>User Name from Child {this.props.name}</h2>
                <input type="button" value="Update Parent" onClick={() => this.props.updateName("Xyz")} />
            </div>
        )
    }
}