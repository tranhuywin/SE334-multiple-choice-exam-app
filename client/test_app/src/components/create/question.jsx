import React, {useState} from "react";
import "./question.css"

import QuestionMark from "../../assets/images/question.png";

function Question() {
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
            {showQuestion === true ? 
            <>
                <div className="left-container">
                    <div className="topic-content">
                        <label>Câu :</label>
                        <textarea rows="6" placeholder="Câu hỏi..."></textarea>
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
                    <div className="close-content">
                        <button onClick={() => setShowQuestion(false)}>X</button>
                    </div>
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
                </div>
            </>
            :
            <div className="add-container" onClick={() => setShowQuestion(true)}>
                <button>
                    <i className="fas fa-plus-circle"></i>
                </button>
            </div>
            }
            
            
        </div>
    );
}

export default Question;