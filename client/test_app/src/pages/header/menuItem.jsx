import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function MenuItem({navitem}) {

    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    }

    return(
        <React.Fragment>
            <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {navitem.submenu ? (
                    <>
                        <Link className={navitem.cName} to={navitem.url}>{navitem.title}</Link>
                        
                        <ul className={ dropdown ? "dropdown" : "dropdown clicked"}>
                            {navitem.submenu.map((item, index1) => {
                              return(
                                <li key={index1}>
                                    <Link className={item.cName} to={item.url} onClick={() => setDropdown(true)}>{item.title}</Link>
                                </li>
                              );
                            })}
                        </ul>
                    </>
                ) : (
                    <Link className={navitem.cName} to={navitem.url}>{navitem.title}</Link>
                )}
            </li>
        </React.Fragment>
        
    );
}

export default MenuItem;