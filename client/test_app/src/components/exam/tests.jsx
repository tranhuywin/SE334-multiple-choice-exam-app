import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import  { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import "./tests.css";


function test () {
    return (
           <div className="container-test">
                <span>Câu 1</span>
                <div className="container-test__question">Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Toán sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Toán được sưu tập qua các năm với đầy đủ lời giải chi tiết.</div>
                <div className="container-test__answer">
                    <input type="radio" id="answer-a" value="A. ABC"/>
                    <label for="answer-a">A. ABC</label><br></br>
                </div>
                <div className="container-test__answer">
                    <input type="radio" id="answer-b" value="A. ABC"/>
                    <label for="answer-a">A. ABC</label><br></br>
                </div>
                <div className="container-test__answer">
                    <input type="radio" id="answer-c" value="A. ABC"/>
                    <label for="answer-a">A. ABC</label><br></br>
                </div>
                <div className="container-test__answer">
                    <input type="radio" id="answer-d" value="A. ABC"/>
                    <label for="answer-a">A. ABC</label><br></br>
                </div>

                <div className="time-and-next-or-prev">
                    <FontAwesomeIcon icon={faClock} />
                    
                </div>
           </div>
    )
}

export default test;