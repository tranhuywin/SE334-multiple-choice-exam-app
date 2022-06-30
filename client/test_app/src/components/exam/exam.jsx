import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import SubjectsList from "./subjects-list.jsx";
import ExamListApi from "./api/subjects-list-api.jsx";
import { subjectsInfo } from "./subject-info.jsx";
import "./exam.css";

const subjects = [
  "toan-hoc",
  "vat-ly",
  "hoa-hoc",
  "sinh-hoc",
  "lich-su",
  "dia-ly",
  "gdcd",
  "tieng-anh",
];
function Exam() {
  const [type, setType] = useState("toan-hoc");

  return (
    <React.Fragment>
      {subjectsInfo.map((subject) => {
        return (
          <div className="container">
            <div className="image">
              <img src={subject.image} alt={subject.image} />
            </div>

            <div className="container-children">
              <div className="text">
                <a className="title" href="/">
                  {subject.title}
                </a>
                <p>{subject.description}</p>
              </div>

              <div className="container-footer">
                <div className="num-exam">10 đề thi</div>
                <button
                  className="btn-category"
                  onClick={() => {
                    for (let i = 0; i < subjectsInfo.length; i++) {
                      if (subject.id === i + 1) {
                        setType(subjects[i]);
                      }
                    }
                    localStorage.setItem("subjectId", subject.id);
                  }}
                >
                  <a href={`/user/exam/${type}`}>Xem chi tiết</a>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Exam;
