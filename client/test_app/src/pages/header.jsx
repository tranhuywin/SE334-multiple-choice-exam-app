import React, { useState, useEffect } from "react";

import "./header.css";

import { navItems } from "./header/navbarItem";
import MenuItem from "./header/menuItem";
import { useNavigate } from 'react-router-dom';
import HeaderApi from "../api/headerApi";

function Header() {
    let navigate = useNavigate();
    const [click, setClick] = useState(false);
    const [openAction, setOpenAction] = useState(false);
    const [user, setUser] = useState("");

    const HandleSignOut = () => {
      localStorage.clear();
      navigate('/');
    }

    const handleGetUser = async () => {
        
      await HeaderApi.getUser()
          .then((res) => {
              if(res !== null) {
                  setUser(res.data.email);
              }
          })
          .catch(error => {
              console.log(error);
          });
  }

    useEffect(() => {
      handleGetUser();
    }, []);

    return(
      <React.Fragment>
          <div>
            <nav className="NavbarItems">
              <h1 className="navbar-logo">REACT<i className="fab fa-react"></i></h1>
              <div className="menu-icon" onClick={() => setClick(!click)}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
              </div>
              <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                {navItems.map((item, index) => {
                  return(
                    <MenuItem navitem={item} key={index}/>
                  );
                })}
              </ul>
              <div className="welcome-user">
                <p>Xin chào, {user}</p>
                <button className="list-action" onClick={() => setOpenAction(!openAction)}>
                  <i className={openAction ? 'fas fa-caret-up' : 'fas fa-caret-down'}></i>
                </button>
                <ul className={openAction ? 'opened' : 'opened clicked'}>
                  <li><a href="!#">Thông tin cá nhân</a></li>
                  <li><a href="!#">Cài đặt</a></li>
                  <li><a href="/" onClick={HandleSignOut}>Đăng xuất</a></li>
                </ul>
              </div>
            </nav>
          </div>
      </React.Fragment>
      
    );
}

export default Header;