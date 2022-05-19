import React, {useState} from "react";
import "./rec-content.css";

function RecContent({img, title, description, link}) {
    const [btn, setBtn] = useState(false);

    const HandleBtnEnter = () => {
        setTimeout(() => setBtn(true), 200);
        // setBtn(true);
    }

    const HandleBtnLeave = () => {
        setBtn(false);
    }

    return(
        <div className="container-rec" onMouseEnter={HandleBtnEnter} onMouseLeave={HandleBtnLeave}>
            <div className="content-visible">
                <img className="image-content" src={img} alt="img"></img>
                <h3 className="title-content">{title}</h3>
                <p className="desc-content">{description}</p>
                {btn && <button className="btn-content">Xem chi tiết</button>}
            </div>
        </div>
    );
}

export default RecContent;