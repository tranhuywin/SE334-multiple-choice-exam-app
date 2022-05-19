import React, { useState } from "react";

import "./header.css";

import  { Button } from "../components/button";
import { navItems } from "./header/navbarItem";
import MenuItem from "./header/menuItem";
import SignIn from "./header/sign/sign-in";
import SignUp from "./header/sign/sign-up";

function Header() {
    const [click, setClick] = useState(false);

    const [signin, setSignIn] = useState(false);

    const [signup, setSignUp] = useState(false);

    return(
      <React.Fragment>
          <div>
            {signin && <SignIn closeSignInModal={setSignIn}/>}
            {signup && <SignUp closeSignUpModal={setSignUp}/>}
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
              <Button onClick={() => setSignIn(true)}>Sign in</Button>
              <Button onClick={() => setSignUp(true)}>Sign up</Button>
            </nav>
          </div>
      </React.Fragment>
      
    );
}

export default Header;