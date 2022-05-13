import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./subjects-list.css"
import Exam from "./exam.jsx"


const subjects = ["posts", "comments", "albums", "photos", "todos", "users"]

function SubjectsList() {
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')

    const getData = () => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then((res) => res.json())
        .then((res) => {
            setPosts(res)
        })
    }

    useEffect(() => {
        getData()
    }, [type])

    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            <Route exact path="/post/:id" render={({match}) => (
                <SubjectsList post={posts.find(p => p.id === match.params.id)} />
            )} />
        </div>
        
    )
}

export default SubjectsList;