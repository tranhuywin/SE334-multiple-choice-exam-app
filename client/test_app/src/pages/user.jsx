import React, { Component } from "react";
import { Outlet } from "react-router-dom";

import "./user.css";
import Header from "./header";
import Footer from "./footer";

class User extends Component {
    render() {
        return(
            <React.Fragment>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default User