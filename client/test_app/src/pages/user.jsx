import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";

import "./user.css";
import Header from "./header";
import Footer from "./footer";

const Home = React.lazy(() => import("../components/home.jsx"));
const Exam = React.lazy(() => import("../components/exam/exam.jsx"));
const SubjectsList = React.lazy(() => import("../components/exam/subjects-list.jsx"));
const Test = React.lazy(() => import("../components/exam/tests.jsx"));
const ManualDocument = React.lazy(() => import("../components/manual-document.jsx"));
const Create = React.lazy(() => import("../components/create.jsx"));
const Results = React.lazy(() => import("../components/results.jsx"));

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
                        <Route exact path = "/results" component={Results}></Route>
                        <Route exact path = "/exam/:name" component={SubjectsList}></Route>
                        <Route exact path = "/test" component={Test}></Route>
                    </Switch>
                </Router>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default User