import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import "./subjects-list.css"
// import Header from "../pages/header.jsx"


// const subjectList = ["posts", "comments", "albums", "photos", "todos", "users"]

function SubjectsList() {

    const [subjects, setSubjects] = useState([])

    const pathName = window.location.pathname.split('/');
    const getPathName = pathName[pathName.length - 1]
    console.log(pathName); 

    const getData = () => {
        fetch(`https://jsonplaceholder.typicode.com/${getPathName}`)
        .then((res) => res.json())
        .then((res) => {
            setSubjects(res)
            // console.log(res)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <ul className="subject-list">
                <h4>Đề Thi Trắc Nghiệm THPT Quốc Gia môn {getPathName} 2022</h4>
                {subjects.map(sub => {
                    return (
                            <li key={sub.id} className="subject-item">
                                <div className="subject-item__title">Đề Thi Trắc Nghiệm THPT QG năm 2022 môn {getPathName}</div>
                                <div className="subject-item__school">Trường THPT ABC</div>
                                <div className="subject-item__calendar">
                                    <FontAwesomeIcon icon={faCalendarDays} className="subject-item__calendar-icon" />
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

                                <a href={`/exam/${getPathName}`} className="btn-starting-test">Bắt đầu thi</a>
                            </li>
                    )
                })}
            </ul>
        </div>
        
    )
}

export default SubjectsList;