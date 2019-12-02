import React from "react";

export default class AboutPageComponent extends React.Component {

    redirectPage = () => {
        debugger;
        this.props.historyData.goBack();
    }

    render() {
        return (
            <>
                
                <input type="button" value="Click For Redirection" onClick={this.redirectPage} />
            </>
        )
    }
}