import React from "react";

export default class AboutPageComponent extends React.Component {

    redirectPage = () => {
        this.props.history.push("/")
    }

    render() {
        return (
            <>
                <h1>This is the About Page: {this.props.match.params.id}</h1>
                <input type="button" value="Click For Redirection" onClick={this.redirectPage} />
            </>
        )
    }
}