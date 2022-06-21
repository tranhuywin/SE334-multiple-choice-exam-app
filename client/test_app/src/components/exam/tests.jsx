import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import "./tests.css";
// import Question from "./question.jsx";

const questions = [
  {
    id: "1",
    image:
      "https://lessonopoly.org/wp-content/uploads/2021/02/do-thi-ham-so-01.jpg",
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "New York", isCorrect: false },
      { answerText: "London", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Dublin", isCorrect: false },
    ],
  },
  {
    id: "2",
    image:
      "https://lessonopoly.org/wp-content/uploads/2021/02/do-thi-ham-so-01.jpg",
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Tony Stark", isCorrect: false },
    ],
  },
  {
    id: "3",
    image:
      "https://lessonopoly.org/wp-content/uploads/2021/02/do-thi-ham-so-01.jpg",
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    id: "4",
    image:
      "https://lessonopoly.org/wp-content/uploads/2021/02/do-thi-ham-so-01.jpg",
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      { answerText: "1", isCorrect: false },
      { answerText: "4", isCorrect: false },
      { answerText: "6", isCorrect: false },
      { answerText: "7", isCorrect: true },
    ],
  },
];

function Test() {
  // Timer
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("01:30:00");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 5400);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  //   Modal
  var modal = document.querySelector(".modal-container");

  if (timer === "00:00:00") {
    if (modal) {
      modal.classList.add("active");
    }
  }

  // Answer the Question
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  // const [checked, setChecked] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  function getBackQuestion() {
    const prevQuestion = currentQuestion - 1;
    return prevQuestion;
  }

  // Count time
  const [countTime, setCountTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCountTime(countTime + 1);
    }, 1000);
  }, [countTime]);

  // Format time
  function fmtMSS(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
  }

  return (
    <div className="container-test">
      <div className="container-test__children">
        {showScore ? (
          <div className="show-score-container">
            <div className="congratulation">
              Xin chúc mừng bạn đã hoàn thành bài thi
            </div>
            <div className="achievement">
              <div className="correct-answer">
                <span>Số câu đúng</span>
                <br></br>
                {(score > 9 ? score : "0" + score) +
                  "/" +
                  (questions.length > 9
                    ? questions.length
                    : "0" + questions.length)}
              </div>
              <div className="final-score">
                <span>Điểm số</span>
                <br></br>
                {((score / questions.length) * 10).toFixed(2)}
              </div>
              <div className="finish-time">
                <span>Thời gian làm bài</span>
                <br></br>
                {fmtMSS(countTime)}
              </div>
            </div>
          </div>
        ) : (
          <div className="doing-tests">
            <div className="container-question">
              <span>Câu {currentQuestion + 1}</span>
              <div className="container-test__question">
                {questions[currentQuestion].questionText}
              </div>
              <img
                src={questions[currentQuestion].image}
                alt={questions[currentQuestion].image}
                className="container-test__image"
              />
              {questions[currentQuestion].answerOptions.map((answer) => (
                <button
                  className="container-test__answer"
                  onClick={() => handleAnswer(answer.isCorrect)}
                >
                  {answer.answerText}
                </button>
              ))}
              <button className="prev-question-btn" onClick={getBackQuestion}>
                <FontAwesomeIcon
                  icon={faArrowLeftLong}
                  className="prev-question-icon"
                />
              </button>
            </div>
            <div className="testing-time-container">
              <div className="testing-time">
                <FontAwesomeIcon icon={faClock} className="testing-time-icon" />
                <span className="countdown-timer">{timer}</span>
              </div>
              <button
                className="testing-time-btn"
                onClick={() => {
                  setShowScore(true);
                }}
              >
                Kết thúc bài thi
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      <div className="modal-container">
        <div className="modal-times-up">
          <div className="modal-title">Thời gian làm bài đã hết!</div>
          <button className="modal-btn" onClick={() => setShowScore(true)}>
            Kết thúc bài thi
          </button>
        </div>
      </div>
    </div>
  );
}

export default Test;
