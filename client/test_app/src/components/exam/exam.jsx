import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import SubjectsList from "./subjects-list.jsx";
import "./exam.css";
import ToanHoc from "../../assets/images/toan-hoc.png";
import HoaHoc from "../../assets/images/hoa-hoc.png";
import VatLy from "../../assets/images/vat-ly.png";
import SinhHoc from "../../assets/images/sinh-hoc.png";
import TiengAnh from "../../assets/images/tieng-anh.png";
import LichSu from "../../assets/images/lich-su.png";
import DiaLy from "../../assets/images/dia-ly.png";
import GDCD from "../../assets/images/gdcd.png";

const subjectsList = [
  {
    id: 1,
    name: "posts",
    image: ToanHoc,
    title: "Đề thi THPT QG môn Toán",
    description:
      "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Toán sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Toán được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
  },

  {
    id: 2,
    name: "comments",
    image: HoaHoc,
    title: "Đề thi THPT QG môn Hóa học",
    description:
      "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Hóa học sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Hóa học được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
  },

  {
    id: 3,
    name: "albums",
    image: VatLy,
    title: "Đề thi THPT QG môn Vật lý",
    description:
      "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Vật lý sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Vật lý được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
  },

  {
    id: 4,
    name: "photos",
    image: SinhHoc,
    title: "Đề thi THPT QG môn Sinh học",
    description:
      "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Sinh học sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Sinh học được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
  },

  {
    id: 5,
    name: "todos",
    image: TiengAnh,
    title: "Đề thi THPT QG môn Tiếng anh",
    description:
      "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Tiếng anh sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Tiếng anh được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
  },

  {
    id: 6,
    name: "users",
    image: LichSu,
    title: "Đề thi THPT QG môn Lịch sử",
    description:
      "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Lịch sử sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Lịch sử được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
  },

  {
    id: 7,
    name: "dia-ly",
    image: DiaLy,
    title: "Đề thi THPT QG môn Địa lý",
    description:
      "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Địa lý sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Địa lý được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
  },

  {
    id: 8,
    name: "GDCD",
    image: GDCD,
    title: "Đề thi THPT QG môn GDCD",
    description:
      "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn GDCD sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Địa lý được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
  },
];

// const subjects = ["posts", "comments", "albums", "photos", "todos", "users"];

function Exam() {
  const [type, setType] = useState("posts");

  console.log(type);

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
                <a className="title" href="/">
                  {subject.title}
                </a>
                <p>{subject.description}</p>
              </div>

              <div className="container-footer">
                <div className="num-exam">100 đề thi</div>
                <button
                  className="btn-category"
                  onClick={() => setType(subject.name)}
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
