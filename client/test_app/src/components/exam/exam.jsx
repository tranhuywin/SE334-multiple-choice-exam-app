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

const subjectsInfo = [
  {
    id: 1,
    name: "toán học",
    image: ToanHoc,
    title: "Đề thi THPT Quốc Gia môn Toán",
    description:
      "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT Quốc Gia môn Toán sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT Quốc Gia môn Toán được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
  },

  {
    id: 2,
    name: "vật lý",
    image: VatLy,
    title: "Đề thi THPT Quốc Gia môn Vật lý",
    description:
      "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT Quốc Gia môn Vật lý sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT Quốc Gia môn Vật lý được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
  },

  {
    id: 3,
    name: "hóa học",
    image: HoaHoc,
    title: "Đề thi THPT Quốc Gia môn Hóa học",
    description:
      "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT Quốc Gia môn Hóa học sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT Quốc Gia môn Hóa học được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
  },

  {
    id: 4,
    name: "sinh học",
    image: SinhHoc,
    title: "Đề thi THPT Quốc Gia môn Sinh học",
    description:
      "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT Quốc Gia môn Sinh học sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT Quốc Gia môn Sinh học được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
  },

  {
    id: 5,
    name: "lịch sử",
    image: LichSu,
    title: "Đề thi THPT Quốc Gia môn Lịch sử",
    description:
      "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT Quốc Gia môn Lịch sử sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT Quốc Gia môn Lịch sử được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
  },

  {
    id: 6,
    name: "địa lý",
    image: DiaLy,
    title: "Đề thi THPT Quốc Gia môn Địa lý",
    description:
      "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT Quốc Gia môn Địa lý sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT Quốc Gia môn Địa lý được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
  },

  {
    id: 7,
    name: "gdcd",
    image: GDCD,
    title: "Đề thi THPT Quốc Gia môn GDCD",
    description:
      "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT Quốc Gia môn GDCD sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT Quốc Gia môn Địa lý được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
  },

  {
    id: 8,
    name: "tiếng anh",
    image: TiengAnh,
    title: "Đề thi THPT Quốc Gia môn Tiếng anh",
    description:
      "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT Quốc Gia môn Tiếng anh sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT Quốc Gia môn Tiếng anh được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
  },
];

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

  // console.log(type);

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
                <div className="num-exam">100 đề thi</div>
                <button
                  className="btn-category"
                  onClick={() => {
                    for (let i = 0; i < subjectsInfo.length; i++) {
                      if (subject.id === i + 1) {
                        setType(subjects[i]);
                      }
                    }
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
