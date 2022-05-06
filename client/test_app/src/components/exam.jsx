import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./exam.css"


function Category({
    image, 
    title, 
    description
}) {
    
    return (
        <React.Fragment>
            <div className="image">
                <img src={image} alt={image} />
            </div>

            <div className="container-children">
                <div className="text">
                    <a className="title" href="/">{title}</a>
                    <p>{description}</p>
                </div>

                <div className="container-footer">
                    <div className="num-exam">100 đề thi</div>
                        <button className="btn-category">
                            <a href="/">Xem chi tiết</a>
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

function Exam () {

    return (
        <React.Fragment>
        {/* Math */}
            <div className="container">
                <Category
                    image="https://s.tracnghiem.net/assets/images/thpt/toan-hoc.png"
                    title="Đề thi THPT QG môn Toán"
                    description="Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Toán sắp đến. 
                    Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Toán được sưu tập qua các năm với đầy đủ lời giải chi tiết."
                >
                </Category>
            </div>

        {/* Chemistry */}
        <div className="container">
                <Category
                    image="https://s.tracnghiem.net/assets/images/thpt/hoa-hoc.png"
                    title="Đề thi THPT QG môn Hóa học"
                    description="Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Hóa học sắp đến. 
                    Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Hóa học được sưu tập qua các năm với đầy đủ lời giải chi tiết."
                >
                </Category>
            </div>

        {/* Physic */}
        <div className="container">
                <Category
                    image="https://s.tracnghiem.net/assets/images/thpt/vat-ly.png"
                    title="Đề thi THPT QG môn Vật lý"
                    description="Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Vật lý sắp đến. 
                    Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Vật lý được sưu tập qua các năm với đầy đủ lời giải chi tiết."
                >
                </Category>
            </div>

        {/* Biology */}
        <div className="container">
                <Category
                    image="https://s.tracnghiem.net/assets/images/thpt/sinh-hoc.png"
                    title="Đề thi THPT QG môn Sinh học"
                    description="Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Sinh học sắp đến. 
                    Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Sinh học được sưu tập qua các năm với đầy đủ lời giải chi tiết."
                >
                </Category>
            </div>

        {/* English */}
        <div className="container">
                <Category
                    image="https://s.tracnghiem.net/assets/images/thpt/tieng-anh.png"
                    title="Đề thi THPT QG môn Tiếng anh"
                    description="Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Tiếng anh sắp đến. 
                    Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Tiếng anh được sưu tập qua các năm với đầy đủ lời giải chi tiết."
                >
                </Category>
            </div>

        {/* History */}
        <div className="container">
                <Category
                    image="https://s.tracnghiem.net/assets/images/thpt/lich-su.png"
                    title="Đề thi THPT QG môn Lịch sử"
                    description="Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Lịch sử sắp đến. 
                    Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Lịch sử được sưu tập qua các năm với đầy đủ lời giải chi tiết."
                >
                </Category>
            </div>

        {/* Geography */}
        <div className="container">
                <Category
                    image="https://s.tracnghiem.net/assets/images/thpt/dia-ly.png"
                    title="Đề thi THPT QG môn Địa lý"
                    description="Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Địa lý sắp đến. 
                    Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Địa lý được sưu tập qua các năm với đầy đủ lời giải chi tiết."
                >
                </Category>
            </div>    
        </React.Fragment>
 )
}

export default Exam;