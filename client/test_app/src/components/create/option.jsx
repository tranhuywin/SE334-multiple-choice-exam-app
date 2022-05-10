import React from "react";
import "./option.css";
import Select from 'react-select'
import 'react-dropdown/style.css';

function Option() {
    const subjects = [
        {
            value: 0,
            label: "Toán học"
        },
        {
            value: 1,
            label: "Lý"
        },
        {
            value: 2,
            label: "Hóa học"
        },
        {
            value: 3,
            label: "Sinh học"
        },
        {
            value: 4,
            label: "Ngữ văn"
        },
        {
            value: 5,
            label: "Lịch sử"
        },
        {
            value: 6,
            label: "Địa lý"
        },
        {
            value: 7,
            label: "GDCD"
        },
        {
            value: 8,
            label: "Tiếng Anh"
        },
    ]
    return(
        <div className="option-part">
            <div className="container-option">
                <div className="title-content">
                    <label>Tiêu đề: </label>
                    <input placeholder="Your title here"/>
                </div>
                <div className="options-content">
                    <div className="option-content">
                        <label>Môn học: </label>
                        <Select options={subjects} className="option-select"/>
                    </div>
                    <div className="option-content">
                        <label>Ngày tạo đề: </label>
                        <input type="date" placeholder="Your title here"/>
                    </div>
                </div>
                <div className="options-content">
                    <div className="option-content">
                        <label>Thời gian làm bài (s): </label>
                        <input placeholder="Time of the exam"/>
                    </div>
                    <div className="option-content">
                        <label>Tên giáo viên: </label>
                        <input placeholder="Name of the teacher"/>
                    </div>
                </div>
                <div className="btn-container">
                    <button className="btn-content">Tiếp tục</button>
                </div>
            </div>
        </div>
    );
}

export default Option;