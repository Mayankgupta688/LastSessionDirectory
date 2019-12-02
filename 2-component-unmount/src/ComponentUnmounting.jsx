import React from 'react';

export default class ParentComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank"
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
        if(this.state.name == "Mayank") {
            return (
                <div>
                    <ChildComponent name={this.state.name} />
                </div>
            )
        } else {
            return (
                <p>
                    <ChildComponent name={this.state.name} />
                </p>
            )
        }
    }
}

class ChildComponent extends React.Component {

    render() {

        if(this.props.name) {
            return <h2>Welcome {this.props.name}</h2>
        } else {
            return <h2>Welcome Guest</h2>
        }
        
    }

    componentWillMount() {
        alert("Component Remounted...")
    }

    componentWillUnmount() {
        alert("Component Unmounted")
    }
}