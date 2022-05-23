import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import "./subjects-list.css"
import SignIn from "../../pages/header/sign/sign-in";
import SignUp from "../../pages/header/sign/sign-in";


// const subjectList = ["posts", "comments", "albums", "photos", "todos", "users"]

function SubjectsList() {

    const [subjects, setSubjects] = useState([])

    const [signin, setSignIn] = useState(false);

    const [signup, setSignUp] = useState(false);

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
            {signin && <SignIn closeSignInModal={setSignIn}/>}
            {signup && <SignUp closeSignUpModal={setSignUp}/>}
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

                                <button className="btn-starting-test" onClick={() => {setSignIn(true)}}>
                                    <a href="#" >Bắt đầu thi</a>
                                </button>
                            </li>
                    )
                })}
            </ul>
        </div>
        
    )
}

export default SubjectsList;