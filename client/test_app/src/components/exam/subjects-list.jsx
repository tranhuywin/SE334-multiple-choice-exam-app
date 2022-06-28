import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import "./subjects-list.css";
import ExamApi from "./api/subjects-list-api.jsx";

const subjectsId = [
  {
    id: 1,
    name: "toan-hoc",
  },

  {
    id: 2,
    name: "vat-ly",
  },

  {
    id: 3,
    name: "hoa-hoc",
  },

  {
    id: 4,
    name: "sinh-hoc",
  },

  {
    id: 5,
    name: "lich-su",
  },

  {
    id: 6,
    name: "dia-ly",
  },

  {
    id: 7,
    name: "gdcd",
  },

  {
    id: 8,
    name: "tieng-anh",
  },
];

function SubjectsList() {
  const [subjects, setSubjects] = useState([]);
  const [subjectId, setSubjectId] = useState();

  const pathName = window.location.pathname.split("/");
  const getSubjectName = pathName[pathName.length - 1];

  useEffect(() => {
    for (let i = 0; i < subjectsId.length; i++) {
      if (subjectsId[i].name === getSubjectName) {
        setSubjectId(subjectsId[i].id);
        console.log(subjectId);
      }
    }
  });

  const getData = async () => {
    // fetch(`http://localhost:3001/subjects/${subjectId}`)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setSubjects(res);
    //     console.log(res);
    //   })
    //   .catch((error) => console.log(error));

    await ExamApi.getExam(subjectId)
      .then((res) => {
        if (res != null) {
          setSubjects(res);
          console.log(res);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
    console.log(subjectId);
  }, []);

  // console.log(getSubjectName);
  // // console.log(subjects);
  // console.log(subjectId);

  return (
    <div>
      <ul className="subject-list">
        {/* <h4>Đề Thi Trắc Nghiệm THPT Quốc Gia môn {getSubjectName} 2022</h4> */}
        {Array.isArray(subjects.exam) &&
          subjects.exam.map((sub) => {
            return (
              <li key={sub.id} className="subject-item">
                <div className="subject-item__title">
                  Đề Thi Trắc Nghiệm THPT QG năm 2022 môn {getSubjectName}
                </div>
                <div className="subject-item__school">
                  Giáo viên soạn đề: abc
                </div>
                <div className="subject-item__calendar">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="subject-item__calendar-icon"
                  />
                  <span>20/20/2022</span>
                </div>

                <div className="progress-box">
                  <div className="progress-box__item">
                    <span>0/50</span>
                    <div className="progress">
                      <div className="progress-bar"></div>
                    </div>
                  </div>
                </div>

                <button className="btn-starting-test" onClick={() => {}}>
                  <a href={`/user/exam/${getSubjectName}/test`}>Bắt đầu thi</a>
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default SubjectsList;
