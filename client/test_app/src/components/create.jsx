import React, {useState} from "react";
import "./create.css"

import Option from "./create/option";
import ListQuestion from "./create/listQuestion";

function Create() {
    return(
        <div className="create-part">
            <div className="heading">
                <div className="content-title">
                    <h2>CÀI ĐẶT BÀI THI</h2>
                </div>
            </div>
            <Option/>
            <div className="title-questions">
                <div className="content-title">
                    <h2>CÂU HỎI TRẮC NGHIỆM</h2>
                </div>
            </div>
            <ListQuestion/>
        </div>
    );
}

export default Create;