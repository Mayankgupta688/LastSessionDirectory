import React, { useState } from "react";

export default class ParentClass extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "AMaynak"
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: "Anshul"
            })
        }, 5000)
    }

    render() {
        return (
            <ReactHooks name={this.state.name}></ReactHooks>
        )
    }
}

function ReactHooks(props) {
    var [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>Counter... {counter}</h1>
            <h2>User Name: {props.name}</h2>
            <ChildHook counter={counter}></ChildHook>
        </div>
        
    )
}

function ChildHook(props) {
    return <h3>Child Name: {props.counter}</h3>
} 