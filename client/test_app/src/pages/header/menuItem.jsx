import React, { useState } from "react";

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
                        <a className={navitem.cName} href={navitem.url}>{navitem.title}</a>
                        
                        <ul className={ dropdown ? "dropdown" : "dropdown clicked"}>
                            {navitem.submenu.map((item, index1) => {
                              return(
                                <li key={index1}>
                                    <a className={item.cName} href={item.url} onClick={() => setDropdown(true)}>{item.title}</a>
                                </li>
                              );
                            })}
                        </ul>
                    </>
                ) : (
                    <a className={navitem.cName} href={navitem.url}>{navitem.title}</a>
                )}
            </li>
        </React.Fragment>
        
    );
}

export default MenuItem;