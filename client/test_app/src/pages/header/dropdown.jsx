import React, {useState} from "react";
import "./dropdown.css";

function Dropdown({subitem}) {

    const [clicked, setClicked] = useState(false);

    return(
        <React.Fragment>
            <>
                <ul className={ clicked ? "dropdown clicked" : "dropdown"}>
                    {subitem.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url} onClick={() => setClicked(true)}>{item.title}</a>
                            </li>
                        );
                    })}
                </ul>
            </>
        </React.Fragment>
        
    );
}

export default Dropdown;