import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import  { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import SubjectsList from "./subjects-list"
import "./exam.css"

const subjectsList = [
    {
        "id": 1,
        "name": "posts",
        "image": "https://s.tracnghiem.net/assets/images/thpt/toan-hoc.png",
        "title": "Đề thi THPT QG môn Toán",
        "description": "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Toán sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Toán được sưu tập qua các năm với đầy đủ lời giải chi tiết."
    },

    {
        "id": 2,
        "name": "comments",
        "image": "https://s.tracnghiem.net/assets/images/thpt/hoa-hoc.png",
        "title": "Đề thi THPT QG môn Hóa học",
        "description": "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Hóa học sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Hóa học được sưu tập qua các năm với đầy đủ lời giải chi tiết."
    },

    {
        "id": 3,
        "name": "albums",
        "image": "https://s.tracnghiem.net/assets/images/thpt/vat-ly.png",
        "title": "Đề thi THPT QG môn Vật lý",
        "description": "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Vật lý sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Vật lý được sưu tập qua các năm với đầy đủ lời giải chi tiết."
    },

    {
        "id": 4,
        "name": "photos",
        "image": "https://s.tracnghiem.net/assets/images/thpt/sinh-hoc.png",
        "title": "Đề thi THPT QG môn Sinh học",
        "description": "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Sinh học sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Sinh học được sưu tập qua các năm với đầy đủ lời giải chi tiết."
    },

    {
        "id": 5,
        "name": "todos",
        "image": "https://s.tracnghiem.net/assets/images/thpt/tieng-anh.png",
        "title": "Đề thi THPT QG môn Tiếng anh",
        "description": "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Tiếng anh sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Tiếng anh được sưu tập qua các năm với đầy đủ lời giải chi tiết."
    },

    {
        "id": 6,
        "name": "users",
        "image": "https://s.tracnghiem.net/assets/images/thpt/lich-su.png",
        "title": "Đề thi THPT QG môn Lịch sử",
        "description": "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Lịch sử sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Lịch sử được sưu tập qua các năm với đầy đủ lời giải chi tiết."
    },

    {
        "id": 7,
        "name": "dia-ly",
        "image": "https://s.tracnghiem.net/assets/images/thpt/dia-ly.png",
        "title": "Đề thi THPT QG môn Địa lý",
        "description": "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Địa lý sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Địa lý được sưu tập qua các năm với đầy đủ lời giải chi tiết."
    }
]

const subjects = ["posts", "comments", "albums", "photos", "todos", "users"]


function Exam () {
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')



    return (
        <React.Fragment>
            {subjectsList.map((subject) => {
                return (
                    <div className="container">
                        <div className="image">
                            <img src={subject.image} alt={subject.image} />
                        </div>

                        <div className="container-children">
                            <div className="text">
                                <a className="title" href="/">{subject.title}</a>
                                <p>{subject.description}</p>
                            </div>

                            <div className="container-footer">
                                <div className="num-exam">100 đề thi</div>
                                {subjects.map(subs => {
                                    if(subs === subject.name){
                                        return (
                                            <button className="btn-category" onClick={() => setType((subs))}>
                                                <a href={`/exam/${subs}`}>Xem chi tiết</a>
                                            </button>
                                        )
                                    }
                                })}
                            </div>            
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
 )
}

export default Exam;