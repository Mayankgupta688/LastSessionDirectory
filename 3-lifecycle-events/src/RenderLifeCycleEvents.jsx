import React from 'react';

export default class RenderLifeCycleEvents extends React.Component {

    constructor() {
        super();
        console.log("Constructor")
        this.state = {
            name: "Anshul",
            desig: "Developer"
        }
    }

    static getDerivedStateFromProps(props){
        console.log("Get Derived State From Props")
        return {
            age: props.age
        }
    }

    render() {
        console.log("Render")
        return (
        <div>
            <b>Component Data... {this.state.name}</b>
            <ChildRenderLifeCycleEvents name={this.state.name}></ChildRenderLifeCycleEvents>
        </div>
        )
    }

    componentDidUpdate() {
        console.log("Component Updated..")
    }

    componentDidMount() {
        console.log("Component Did Mount")
        setTimeout(() => {
            this.setState( {
                name: "XYCX"
            })
        }, 5000)
    }
}

class ChildRenderLifeCycleEvents extends React.Component {

    static getDerivedStateFromProps(props){
        console.log("Get Derived State From Props Child")
    }

    render() {
        console.log("Render Child")
        return <div>Component Child Data... {this.props.name}</div>
    }

    componentDidUpdate() {
        console.log("Component Updated Child..")
    }

    componentDidMount() {
        console.log("Component Did Mount Child")
    }
}