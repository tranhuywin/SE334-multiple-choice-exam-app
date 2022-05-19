import React from "react";
import "./rec-document.css";

function RecDocument({img, title}) {
    return(
        <div className="container-recdocument">
            <div className="recdocument-img">
                <img className="image-image" src={img} alt="img"></img>
            </div>
            <p className="recdocument-title">{title}</p>
        </div>
    );
}

export default RecDocument;