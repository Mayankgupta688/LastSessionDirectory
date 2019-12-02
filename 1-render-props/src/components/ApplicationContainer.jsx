import React from "react";
import {Route, NavLink, BrowserRouter} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import HomePageComponent from "./HomePageComponent";
import AboutPageComponent from "./AboutPageComponent";
import UserNotAuthorized from "./UserNotAuthorized";
import { isDebuggerStatement } from "@babel/types";



export default class ApplicationContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            isLoggedIn: false
        }
        
    }

    authorizeUser = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    render() {
        return (
            <BrowserRouter>
                <HeaderComponent></HeaderComponent>


                <nav style={{paddingBottom: "20px"}}>
                    <SecureLink activeClassName="highlightSelectedLink" style={{paddingRight: "10px"}}  to="/">Home</SecureLink>
                    <SecureLink activeClassName="highlightSelectedLink" style={{paddingRight: "10px"}} isAuthorized={this.state.isLoggedIn} to="/about">About</SecureLink>
                </nav>

                <input type="button" onClick={this.authorizeUser} value="Click To Authorize" />

                
                <Route exact path="/" component={HomePageComponent} />
                <Route exact path="/about" render={(renderProps) => {
                    if(this.state.isLoggedIn == true) {
                        debugger;
                        return <AboutPageComponent historyData={renderProps.history}></AboutPageComponent>
                    } else {
                        return <UserNotAuthorized></UserNotAuthorized>
                    }
                }} />
                <FooterComponent></FooterComponent>
            </BrowserRouter>
        )
    }
}


class SecureLink extends React.Component {

    onClickFunctionality = () => {
        console.log("User Clicked Some Link")
    }

    render() {
        debugger;
        if(this.props.isLoggedIn == true) {
            return <NavLink exact onClick={this.onClickFunctionality} {...this.props}>User Click: {this.props.children}</NavLink>
        } else {
            <Navlink to="/notAuthorized"></Navlink>
        }
        
    }
}

