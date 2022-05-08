import React, { Component } from "react";
import "./home.css"

import Intro from "./home/intro";
import MainContent from "./home/maincontent";
import Documents from "./home/documents";

class Home extends Component {
    render() {
        return(
            <React.Fragment>
                <Intro/>
                <MainContent/>
                <Documents/>
            </React.Fragment>
        );
    }
}

export default Home;