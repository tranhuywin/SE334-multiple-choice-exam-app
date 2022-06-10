import React from "react";
import "./intro.css";

function Intro() {

  return (
    <div className="intro-part">
      <div className="container-slider">

        <div className="text-container">
          <div className="text-content">
            <h3>Trắc nghiệm online</h3>
            <ul>
              <li>Tạo đề kiểm tra</li>
              <li>Thi trắc nghiệm trực tuyến</li>
              <li>Tra cứu kết quả</li>
            </ul>
          </div>
        </div>
        <div className="img-container">
          <img src="https://ninequiz.com/static/media/image2.b1d075b4.png" alt="img"></img>
        </div>
      </div>
    </div>
  );
}

export default Intro;