import React from 'react';

var OtherComponent = React.memo(function ChildData(props) {
    console.log("Functional Component Re-Rendered")
    return <div>{props.counter}</div>
})

export default class ParentComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                counter: 0
            })
        }, 1000)
    }

    render() {
        console.log("Parent Re-Rendered...")
        return (
            
            <>
                <h1>Parent Component: {this.state.counter}</h1>
                <ChildComponent counter={this.state.counter}></ChildComponent>
                <OtherComponent counter={this.state.counter}></OtherComponent>
            </>
        )
    }
}



class ChildComponent extends React.PureComponent {

    
    render() {
        console.log("Child Re-Rendered...");
        return (
            <>
                <h1>Child Component: {this.props.counter}</h1>
            </>
        )
    }
}