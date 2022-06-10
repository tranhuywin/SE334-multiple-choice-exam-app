import React, {useState} from "react";
import './rec-result.css';

function RecResult(props) {
    return(
        <div className="rec-container">
            <div className="rec-content">
                <div className="rec-title">
                    <h4>Title</h4>
                </div>
                <div className="rec-properties">
                    <ul>
                        <li><i class="fas fa-calendar-alt"></i> Ngày tạo đề: </li>
                        <li><i class="fas fa-stopwatch"></i> Thời gian làm bài: </li>
                        <li><i class="fas fa-list-ol"></i> Số câu hỏi: </li>
                        <li><i class="fas fa-check-circle"></i> Trả lời đúng: </li>
                        <li><i class="fas fa-star"></i> Điểm: </li>
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