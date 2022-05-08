import React, { useState } from "react";

import "./header.css";

import  { Button } from "../components/button";
import { navItems } from "./header/navbarItem";
import MenuItem from "./header/menuItem";
import SignIn from "./header/sign/sign-in";

function Header() {
    const [click, setClick] = useState(false);

    const [signin, setSignin] = useState(false);

    const handleClick = () => setClick(!click);

    const handleSignInModal = () => setSignin(true);

    return(
      <React.Fragment>
          <div>
            {signin && <SignIn closeSignInModal={setSignin}/>}
            <nav className="NavbarItems">
              <h1 className="navbar-logo">REACT<i className="fab fa-react"></i></h1>
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
              </div>
              <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                {navItems.map((item, index) => {
                  return(
                    <MenuItem navitem={item} key={index}/>
                  );
                })}
              </ul>
              <Button onClick={handleSignInModal}>Sign in</Button>
              <Button>Sign up</Button>
            </nav>
          </div>
      </React.Fragment>
      
    );
}

export default Header;