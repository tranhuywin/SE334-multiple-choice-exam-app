import React, {useState} from "react";
import "./question.css"

import QuestionMark from "../../assets/images/question.png";

function Question({question, num, handleDelete}) {
    const [imageUrl, setImageUrl] = useState(QuestionMark);

    const [showQuestion, setShowQuestion] = useState(false);

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2) {
                setImageUrl(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    return(
        <div className="question-container">
            <div className="question-content">
                {showQuestion === true ? 
                <>
                    <div className="close-container">
                        <button onClick={() => setShowQuestion(false)}>X</button>
                    </div>
                    <div className="content-container">
                        <div className="left-container">
                            <div className="topic-content">
                                <label>Câu :</label>
                                <textarea rows="4" placeholder="Nội dung câu hỏi?"></textarea>
                            </div>
                            <div className="answer-content">
                                <label>A.</label>
                                <input placeholder="Câu trả lời..." />
                                <input type="radio" name="correct-answer" title="Checked stand for correct answer" />
                            </div>
                            <div className="answer-content">
                                <label>B.</label>
                                <input placeholder="Câu trả lời..." />
                                <input type="radio" name="correct-answer" title="Checked stand for correct answer" />
                            </div>
                            <div className="answer-content">
                                <label>C.</label>
                                <input placeholder="Câu trả lời..." />
                                <input type="radio" name="correct-answer" title="Checked stand for correct answer" />
                            </div>
                            <div className="answer-content">
                                <label>D.</label>
                                <input placeholder="Câu trả lời..." />
                                <input type="radio" name="correct-answer" title="Checked stand for correct answer" />
                            </div>
                        </div>
                        <div className="right-container">
                            <div className="image-content">
                                <img src={imageUrl} alt="img"></img>
                            </div>
                            <div className="tools-content">
                                <input type="file" id="img" accept="image/*" onChange={imageHandler} />
                                <label htmlFor="img" title="Add image">
                                    <i className="fas fa-folder-plus" id="add-image"></i>
                                </label>
                                <label title="Remove image" onClick={() => setImageUrl(QuestionMark)}>
                                    <i className="fas fa-trash-alt" id="delete-image"></i>
                                </label>
                            </div>
                            <div className="add-list">
                                <button>Xác nhận</button>
                            </div>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="content-container">
                        <div className="left-container">
                            <div className="topic-content">
                                <label>Câu {num + 1}:</label>
                                <p>{question.question}</p>
                            </div>
                            <div className="answer-content-view">
                                <label>A.</label>
                                <p>{question.answer_a}</p>
                            </div>
                            <div className="answer-content-view">
                                <label>B.</label>
                                <p>{question.answer_b}</p>
                            </div>
                            <div className="answer-content-view">
                                <label>C.</label>
                                <p>{question.answer_c}</p>
                            </div>
                            <div className="answer-content-view">
                                <label>D.</label>
                                <p>{question.answer_d}</p>
                            </div>
                        </div>
                        <div className="right-container">
                            <div className="image-content">
                                <img src={question.img} alt="img"></img>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content">
                        <i className="fas fa-edit" id="update-question" title="Chỉnh sửa câu hỏi" onClick={() => setShowQuestion(true)}></i>
                        <i className="fas fa-trash-alt" id="delete-question" title="Xóa câu hỏi" onClick={handleDelete}></i>
                    </div>
                </>
                }
            </div>
        </div>
    );
}

export default Question;