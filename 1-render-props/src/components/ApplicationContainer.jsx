import React from "react";
import {Route, NavLink, BrowserRouter} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import AboutPageComponent from "./AboutPageComponent";
import HomePageComponent from "./HomePageComponent";



export default class ApplicationContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            isLogged: true
        }
        
    }

    render() {
        return (
            <BrowserRouter>
                <HeaderComponent></HeaderComponent>


                <nav style={{paddingBottom: "20px"}}>
                    <NavLink exact activeClassName="highlightSelectedLink" style={{paddingRight: "10px"}} to="/">Home</NavLink>
                    <NavLink activeClassName="highlightSelectedLink" style={{paddingRight: "10px"}} to="/about">About</NavLink>
                </nav>

                
                <Route exact path="/" component={HomePageComponent} />
                <Route exact path="/about" component={AboutPageComponent}/>
                <FooterComponent></FooterComponent>
            </BrowserRouter>
        )
    }
}

