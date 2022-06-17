import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import  { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import "./tests.css";


function Test () {
  const Ref = useRef(null);
  const [timer, setTimer] = useState('00:00:00');

  const getTimeRemaining = (e) => {
      const total = Date.parse(e) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / 1000 / 60 / 60) % 24);
      return {
          total, hours, minutes, seconds
      };
  }

  const startTimer = (e) => {
      let { total, hours, minutes, seconds } 
                  = getTimeRemaining(e);
      if (total >= 0) {
          setTimer(
              (hours > 9 ? hours : '0' + hours) + ':' +
              (minutes > 9 ? minutes : '0' + minutes) + ':'
              + (seconds > 9 ? seconds : '0' + seconds)
          )
      }
  }


  const clearTimer = (e) => {
      setTimer('01:30:00');
      if (Ref.current) clearInterval(Ref.current);
      const id = setInterval(() => {
          startTimer(e);
      }, 1000)
      Ref.current = id;
  }

  const getDeadTime = () => {
      let deadline = new Date();
      deadline.setSeconds(deadline.getSeconds() + 5400);
      return deadline;
  }

  useEffect(() => {
      clearTimer(getDeadTime());
  }, []);

  const onClickReset = () => {
      clearTimer(getDeadTime());
  }

    return (
        <div className="container-test">
            <div className="doing-tests">
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
                
                <div className="testing-time-container">
                    <div className="testing-time">
                        <FontAwesomeIcon icon={faClock} className="testing-time-icon"/>
                        <span className="countdown-timer">{timer}</span>
                    </div>
                    <button className="testing-time-btn" onClick={onClickReset}>Kết thúc bài thi</button>
                </div>
            </div>

        </div>
    )
}

export default Test;