import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./footer.css"

class Footer extends Component {
    render() {
      return(
        <div className="main-footer">
          <div className="container">
            <div className="row">

              <div className="col">
                <h4 className="h4-text">CÔNG TY CỔ PHẦN VIỆT NAM</h4>
                <ul className="list-unstyle">
                  <li className="title-text"><i class="fas fa-map-marker-alt"></i> Đường A, khu phố 6, TPHCM </li>
                  <li className="title-text"><i class="fas fa-phone-alt"></i> Hotline: 09xxxxxx </li>
                </ul>
              </div>

              <div className="col">
                <h4 className="h4-text">KẾT NỐI VỚI CHÚNG TÔI</h4>
                <ul className="list-unstyle">
                  <li className="title-text"><i class="fab fa-facebook"></i> Facebook</li>
                  <li className="title-text"><i class="fab fa-twitter"></i> Twitter</li>
                  <li className="title-text"><i class="fab fa-instagram"></i> Instagram</li>
                </ul>
              </div>

            </div>
            <hr/>
            <div className="row">
              <p className="col-sm">Copy right 2019 - 2022. React.com</p>
            </div>
          </div>
        </div>
      );
    }
}

export default Footer;