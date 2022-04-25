import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/button";
// import { BrowserRouter as Router} from "react-router-dom";

import "./header.css";

const HomePage = "/";
const ExamPage = "/exam";
const ManualDocumentPage = "/manual-document";
const ContactsPage = "#";
const HelpPage = "#";

const navbarItems = [
  {
    title: 'Trang chủ',
    url: HomePage,
    cName: 'nav-links'
  },
  {
    title: 'Thi THPTQG',
    url: ExamPage,
    cName: 'nav-links'
  },
  {
    title: 'Tài liệu',
    url: ManualDocumentPage,
    cName: 'nav-links'
  },
  {
    title: 'Liên hệ',
    url: ContactsPage,
    cName: 'nav-links'
  },
  {
    title: 'Hướng dẫn',
    url: HelpPage,
    cName: 'nav-links'
  },
  {
    title: 'Đăng nhập',
    url: '#',
    cName: 'nav-links-button'
  },
  {
    title: 'Đăng ký',
    url: '#',
    cName: 'nav-links-button'
  },
]

class Header extends Component {
    state = { clicked: false }

    handleClick = () => {
      this.setState({ clicked: !this.state.clicked})
    }

    render() {
      return(
        <React.Fragment>
            <div>
              <nav className="NavbarItems">
                <h1 className="navbar-logo">REACT<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                  <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={ this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                  {navbarItems.map((item, index) => {
                    return(
                      <li key={index}>
                        <a className={item.cName} href={item.url}>{item.title}</a>
                      </li>
                    )
                  })}
                </ul>
                {/* <Button>Sign up</Button> */}
              </nav>
            <hr />
            </div>
        </React.Fragment>
        
      );
    }
}

export default Header;