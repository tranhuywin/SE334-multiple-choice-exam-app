import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";

import "./user.css";
import Header from "./header";
import Footer from "./footer";

const Home = React.lazy(() => import("../components/home.jsx"));
const Exam = React.lazy(() => import("../components/exam.jsx"));
const ManualDocument = React.lazy(() => import("../components/manual-document.jsx"));
const Create = React.lazy(() => import("../components/create.jsx"));

class User extends Component {
    render() {
        return(
            <React.Fragment>
                <Header></Header>
                <Router>
                    <Switch>
                        <Route exact path = "/" component={Home}></Route>
                        <Route exact path = "/exam" component={Exam}></Route>
                        <Route exact path = "/manual-document" component={ManualDocument}></Route>
                        <Route exact path = "/create" component={Create}></Route>
                    </Switch>
                </Router>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default User