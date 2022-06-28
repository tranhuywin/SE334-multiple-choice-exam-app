import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import "./subjects-list.css";
import ExamListApi from "./api/subjects-list-api.jsx";
import ExamApi from "./api/exam-api.jsx";

function SubjectsList() {
  const [subjects, setSubjects] = useState([]);
  const [subjectsList, setSubjectsList] = useState([]);
  const [subjectId, setSubjectId] = useState(9);

  const pathName = window.location.pathname.split("/");
  const getSubjectName = pathName[pathName.length - 1];

  const getData = async () => {
    await ExamListApi.getExamList(subjectId)
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

  const getSubName = async () => {
    await ExamApi.getExam()
      .then((res) => {
        if (res != null) {
          setSubjectsList(res);
          console.log(res);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
    getSubName();
  }, []);

  return (
    <div>
      <ul className="subject-list">
        {/* <h4>
          Đề Thi Trắc Nghiệm THPT Quốc Gia môn{" "}
          {subjectsList[subjectId - 1].name} 2022
        </h4> */}
        {Array.isArray(subjects.exam) &&
          subjects.exam.map((sub) => {
            return (
              <li key={sub.id} className="subject-item">
                <div className="subject-item__title">
                  Đề Thi Trắc Nghiệm THPT QG năm 2022 môn{" "}
                  {subjectsList[subjectId - 1].name}
                </div>
                <div className="subject-item__school">
                  Giáo viên: Nguyễn Văn A
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
                    <span>0/{subjects.exam.length}</span>
                    <div className="progress">
                      <div className="progress-bar"></div>
                    </div>
                  </div>
                </div>

                <button className="btn-starting-test" onClick={() => {}}>
                  <a href={`/user/exam/${getSubjectName}/${sub.id}`}>
                    Bắt đầu thi
                  </a>
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default SubjectsList;
