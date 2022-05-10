import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./subjects-list.css"



function SubjectsList() {
    const [Users, fetchUsers] = useState([])

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            fetchUsers(res)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
        <h2>React Fetch API Example</h2>
        <ul>
            {Users.map((item, i) => {
            return <li key={i}>{item.name}</li>
            })}
        </ul>
        </>
    )
}

export default SubjectsList;