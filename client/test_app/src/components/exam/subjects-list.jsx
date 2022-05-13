import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./subjects-list.css"
import Exam from "./exam.jsx"


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
            <ul>
                {subjects.map(sub => {
                    return (
                        (
                            <li key={sub.id}>{sub.title || sub.name}</li>
                        )
                    )
                })}
            </ul>
        </div>
        
    )
}

export default SubjectsList;