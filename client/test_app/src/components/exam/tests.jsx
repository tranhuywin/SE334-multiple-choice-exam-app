// import React, { Component } from "react";
// import { Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock } from "@fortawesome/free-solid-svg-icons";
// import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
// import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
// import "./tests.css";

// function Answer({ checked, content, value, name, onChange }) {
//   return (
//     <div className="container-test__answer">
//       <input
//         type="radio"
//         // className="container-test__answerA"
//         name={name}
//         value={value}
//         checked={checked}
//         onChange={onChange}
//       />
//       <label for="">{content}</label>
//     </div>
//   );
// }

// function Test() {
//   // Gets test to do
//   const [exam, setExam] = useState([]);
//   const pathName = window.location.pathname.split("/");
//   const getExamId = pathName[pathName.length - 1];

//   const getData = () => {
//     fetch(`http://localhost:3001/exams` + getExamId)
//       .then((res) => res.json())
//       .then((res) => {
//         setExam(res);
//         // console.log(res)
//       });
//   };

//   useEffect(() => {
//     getData();
//   }, []);
//   // Timer
//   const Ref = useRef(null);
//   const [timer, setTimer] = useState("00:00:00");

//   const getTimeRemaining = (e) => {
//     const total = Date.parse(e) - Date.parse(new Date());
//     const seconds = Math.floor((total / 1000) % 60);
//     const minutes = Math.floor((total / 1000 / 60) % 60);
//     const hours = Math.floor((total / 1000 / 60 / 60) % 24);
//     return {
//       total,
//       hours,
//       minutes,
//       seconds,
//     };
//   };

//   const startTimer = (e) => {
//     let { total, hours, minutes, seconds } = getTimeRemaining(e);
//     if (total >= 0) {
//       setTimer(
//         (hours > 9 ? hours : "0" + hours) +
//           ":" +
//           (minutes > 9 ? minutes : "0" + minutes) +
//           ":" +
//           (seconds > 9 ? seconds : "0" + seconds)
//       );
//     }
//   };

//   const clearTimer = (e) => {
//     setTimer("01:30:00");
//     if (Ref.current) clearInterval(Ref.current);
//     const id = setInterval(() => {
//       startTimer(e);
//     }, 1000);
//     Ref.current = id;
//   };

//   const getDeadTime = () => {
//     let deadline = new Date();
//     deadline.setSeconds(deadline.getSeconds() + 5400);
//     return deadline;
//   };

//   useEffect(() => {
//     clearTimer(getDeadTime());
//   }, []);

//   const onClickReset = () => {
//     clearTimer(getDeadTime());
//   };

//   //   Modal
//   var modal = document.querySelector(".modal-container");

//   if (timer === "00:00:00") {
//     if (modal) {
//       modal.classList.add("active");
//     }
//   }

//   // Answer the Question
//   const [answerKey, setAnswerKey] = useState();
//   const [showScore, setShowScore] = useState(false);
//   const [score, setScore] = useState(0);

//   const handleAnswer = (isCorrect) => {
//     if (isCorrect) {
//       setScore(score + 1);
//     }
//   };

//   // Answer checked
//   const [checked, setChecked] = useState();

//   // Count time
//   const [countTime, setCountTime] = useState(0);

//   const countUpTime = () => {
//     if (pauseTime === false) {
//       setTimeout(() => {
//         setCountTime(countTime + 1);
//       }, 900);
//     } else {
//       clearTimeout(countUpTime);
//     }
//   };

//   useEffect(() => {
//     countUpTime();
//   }, [countTime]);

//   // Pause time
//   const [pauseTime, setPauseTime] = useState(false);

//   // Format time
//   function fmtMSS(s) {
//     return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
//   }

//   // Answer List
//   const [answerList, setAnswerList] = useState([]);
//   // console.log(answerList);

//   // Post the answers
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     localStorage.setItem("answerList", JSON.stringify(items));
//   }, [items]);

//   return (
//     <div className="container-test">
//       <div className="container-test__children">
//         {showScore ? (
//           <div className="show-score-container">
//             <div className="congratulation">
//               Xin chúc mừng bạn đã hoàn thành bài thi
//             </div>
//             <div className="achievement">
//               <div className="correct-answer">
//                 <span>Số câu đúng</span>
//                 <br></br>
//                 {(score > 9 ? score : "0" + score) +
//                   "/" +
//                   (questions.length > 9
//                     ? questions.length
//                     : "0" + questions.length)}
//               </div>
//               <div className="final-score">
//                 <span>Điểm số</span>
//                 <br></br>
//                 {((score / questions.length) * 10).toFixed(1)}
//               </div>
//               <div className="finish-time">
//                 <span>Thời gian làm bài</span>
//                 <br></br>
//                 {fmtMSS(countTime)}
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="doing-tests">
//             {questions.map((question) => (
//               <div className="container-question">
//                 <span>Câu {question.id}</span>
//                 <div className="container-test__question">
//                   {question.content}
//                 </div>
//                 <img
//                   src={question.urlImage}
//                   alt={question.urlImage}
//                   className="container-test__image"
//                 />
//                 {/* Answers */}
//                 <Answer
//                   name={question.content}
//                   value="1"
//                   // checked={checked === answerKey}
//                   onChange={(e) => {
//                     setAnswerList([
//                       ...answerList,
//                       parseInt(e.target.dataset.value),
//                     ]);
//                     setChecked(parseInt(e.target.value));
//                     setAnswerKey(parseInt(e.target.value));
//                     handleAnswer(question.answerA.isCorrect);
//                   }}
//                   content={question.answerA.content}
//                 />
//                 <Answer
//                   name={question.content}
//                   value="2"
//                   // checked={checked === answerKey + 1}
//                   onChange={(e) => {
//                     setAnswerList([...answerList, parseInt(e.target.value)]);
//                     setChecked(parseInt(e.target.value));
//                     setAnswerKey(parseInt(e.target.value));
//                     handleAnswer(question.answerB.isCorrect);
//                   }}
//                   content={question.answerB.content}
//                 />
//                 <Answer
//                   name={question.content}
//                   value="3"
//                   // checked={checked === answerKey + 2}
//                   onChange={(e) => {
//                     setAnswerList([...answerList, parseInt(e.target.value)]);
//                     setChecked(parseInt(e.target.value));
//                     setAnswerKey(parseInt(e.target.value));
//                     handleAnswer(question.answerC.isCorrect);
//                   }}
//                   content={question.answerC.content}
//                 />
//                 <Answer
//                   name={question.content}
//                   value="4"
//                   // checked={checked === answerKey + 3}
//                   onChange={(e) => {
//                     setAnswerList([...answerList, parseInt(e.target.value)]);
//                     setChecked(parseInt(e.target.value));
//                     setAnswerKey(parseInt(e.target.value));
//                     handleAnswer(question.answerD.isCorrect);
//                   }}
//                   content={question.answerD.content}
//                 />
//               </div>
//             ))}
//             <div className="testing-time-container">
//               <div className="testing-time">
//                 <FontAwesomeIcon icon={faClock} className="testing-time-icon" />
//                 <span className="countdown-timer">{timer}</span>
//               </div>
//               <button
//                 className="testing-time-btn"
//                 onClick={() => {
//                   setPauseTime(true);
//                   setShowScore(true);
//                   setItems(answerList);
//                 }}
//               >
//                 Kết thúc bài thi
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Modal */}
//       <div className="modal-container">
//         <div className="modal-times-up">
//           <div className="modal-title">Thời gian làm bài đã hết!</div>
//           <button
//             className="modal-btn"
//             onClick={() => {
//               if (modal) {
//                 modal.classList.add("disable");
//               }
//               setPauseTime(true);
//               setShowScore(true);
//             }}
//           >
//             Kết thúc bài thi
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Test;
