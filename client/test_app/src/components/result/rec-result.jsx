import React, {useState} from "react";
import './rec-result.css';

function RecResult(props) {
    return(
        <div className="rec-container">
            <div className="rec-content">
                <div className="rec-title">
                    <h4>{props.title}</h4>
                </div>
                <div className="rec-properties">
                    <ul>
                        <li><i class="fas fa-calendar-alt"></i> Ngày tạo đề: {props.date}</li>
                        <li><i class="fas fa-stopwatch"></i> Thời gian làm bài: {props.time}</li>
                        <li><i class="fas fa-list-ol"></i> Số câu hỏi: {props.numOfQues}</li>
                        <li><i class="fas fa-check-circle"></i> Trả lời đúng: {props.correctAnswer}</li>
                        <li><i class="fas fa-star"></i> Điểm: {props.score}</li>
                    </ul>
                </div>
                <div className="rec-footer">
                    <button id="btn-check">Xem</button>
                    <button>Làm lại</button>
                </div>
            </div>
        </div>
    );
}

export default RecResult;