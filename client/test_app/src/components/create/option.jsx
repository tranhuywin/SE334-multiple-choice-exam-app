import React, { useState } from "react";
import "./option.css";
import Select from 'react-select'
import 'react-dropdown/style.css';

function Option({nextBtn}) {
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

    const [title, setTitle] = useState("");
    const [idSubject, setIdSubjects] = useState(0);
    const [dateTime, setDateTime] = useState("");
    const [timeText, setTimeText] = useState(0);
    const [name, setName] = useState("");

    const handleBtnNext = () => {
        if(title !== "" && idSubject !== 0 && dateTime !== "" && timeText !== 0 && name !== "") {
            localStorage.setItem('titleExam', JSON.stringify(title));
            localStorage.setItem('idSubject', JSON.stringify(idSubject));
            localStorage.setItem('dateTime', JSON.stringify(dateTime));
            localStorage.setItem('timeText', JSON.stringify(timeText));
            localStorage.setItem('name', JSON.stringify(name));
            nextBtn(true);
        } else {
            alert("Vui lòng nhập thông tin bài thi trước khi tạo câu hỏi");
        }
        
    }

    return(
        <div className="option-part">
            <div className="container-option">
                <div className="title-content">
                    <label>Tiêu đề: </label>
                    <input placeholder="Your title here" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="options-content">
                    <div className="option-content">
                        <label>Môn học: </label>
                        <Select options={subjects} className="option-select" value={idSubject} onChange={e => setIdSubjects(e.value)}/>
                    </div>
                    <div className="option-content">
                        <label>Ngày tạo đề: </label>
                        <input type="date" placeholder="Your title here" value={dateTime} onChange={e => setDateTime(e.target.value)}/>
                    </div>
                </div>
                <div className="options-content">
                    <div className="option-content">
                        <label>Thời gian làm bài (s): </label>
                        <input placeholder="0" type="number" min="0" value={timeText} onChange={e => setTimeText(e.target.value)}/>
                    </div>
                    <div className="option-content">
                        <label>Tên giáo viên: </label>
                        <input placeholder="Name of the teacher" value={name} onChange={e => setName(e.target.value)}/>
                    </div>
                </div>
                <div className="btn-container">
                    <button className="btn-content" onClick={handleBtnNext}>Tiếp tục</button>
                </div>
            </div>
        </div>
    );
}

export default Option;