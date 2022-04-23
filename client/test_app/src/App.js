import React, { Component } from "react";
import './App.css';
import { Route, Switch} from 'react-router-dom';
import { BrowserRouter as Router} from "react-router-dom";
import { createBrowserHistory } from "history";

const User = React.lazy(() => import("./pages/user.jsx"));

const history = createBrowserHistory();

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <Router>
          <Switch>
              <Route path = "/" component={User}/>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
