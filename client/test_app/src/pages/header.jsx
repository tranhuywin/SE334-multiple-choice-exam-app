import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router} from "react-router-dom";

import "./header.css";

class Header extends Component {
    render() {
      return(
        <React.Fragment>
            <div>
              <nav>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/exam">Thi THPTQG</a>
                  </li>
                  <li>
                    <a href="/manual-document">Tài liệu hướng dẫn</a>
                  </li>
                </ul>
              </nav>
            <hr />
            </div>
        </React.Fragment>
        
      );
    }
}

export default Header;