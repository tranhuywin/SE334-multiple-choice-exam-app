import React, {useState} from "react";
import './create-question.css';

import QuestionMark from "../../assets/images/question.png";

function CreateQuestion({addQuestionToList}) {

    const [question, setQuestion] = useState("");
    const [answera, setAnswera] = useState("");
    const [answerb, setAnswerb] = useState("");
    const [answerc, setAnswerc] = useState("");
    const [answerd, setAnswerd] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [imageUrl, setImageUrl] = useState(QuestionMark);

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2) {
                setImageUrl(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    const handleAddQuestion = () => {
        if(question !== "" && answera !== "" && answerb !== "" && answerc !== "" && answerd !== "") {
            addQuestionToList(prev => [...prev, 
                {
                    content: question,
                    urlImage: imageUrl,
                    answerA: {
                        isCorrect: 0 === parseInt(correctAnswer) ? true : false,
                        content: answera
                    }, 
                    answerB: {
                        isCorrect: 1 === parseInt(correctAnswer) ? true : false,
                        content: answerb
                    },
                    answerC: {
                        isCorrect: 2 === parseInt(correctAnswer) ? true : false,
                        content: answerc
                    }, 
                    answerD: {
                        isCorrect: 3 === parseInt(correctAnswer) ? true : false,
                        content: answerd
                    },
                }
            ]);
        } else {
            alert("Chưa nhập đầy đủ câu hỏi & câu trả lời");
        }

        setQuestion("");
        setAnswera("");
        setAnswerb("");
        setAnswerc("");
        setAnswerd("");
        setCorrectAnswer("");
    }

    return(
        <div className="create-question-container">
            <div className="create-question-content">
                <div className="create-content-container">
                    <div className="create-left-container">
                        <div className="create-topic-content">
                            <label>Câu :</label>
                            <textarea rows="4" placeholder="Nội dung câu hỏi?" value={question} onChange={e => setQuestion(e.target.value)}></textarea>
                        </div>
                        <div className="create-answer-content">
                            <label>A.</label>
                            <input placeholder="Câu trả lời..." value={answera} onChange={e => setAnswera(e.target.value)}/>
                            <input type="radio" name="correct-answer" value={"0"} checked={correctAnswer === "0"} onChange={e => setCorrectAnswer(e.target.value)}/>
                        </div>
                        <div className="create-answer-content">
                            <label>B.</label>
                            <input placeholder="Câu trả lời..." value={answerb} onChange={e => setAnswerb(e.target.value)}/>
                            <input type="radio" name="correct-answer" value={"1"} checked={correctAnswer === "1"} onChange={e => setCorrectAnswer(e.target.value)}/>
                        </div>
                        <div className="create-answer-content">
                            <label>C.</label>
                            <input placeholder="Câu trả lời..." value={answerc} onChange={e => setAnswerc(e.target.value)}/>
                            <input type="radio" name="correct-answer" value={"2"} checked={correctAnswer === "2"} onChange={e => setCorrectAnswer(e.target.value)}/>
                        </div>
                        <div className="create-answer-content">
                            <label>D.</label>
                            <input placeholder="Câu trả lời..." value={answerd} onChange={e => setAnswerd(e.target.value)}/>
                            <input type="radio" name="correct-answer" value={"3"} checked={correctAnswer === "3"} onChange={e => setCorrectAnswer(e.target.value)}/>
                        </div>
                    </div>
                    <div className="create-right-container">
                        <div className="create-image-content">
                            <img src={imageUrl} alt="img"></img>
                        </div>
                        <div className="create-tools-content">
                            <input type="file" id="img" accept="image/*" onChange={imageHandler} />
                            <label htmlFor="img" title="Add image">
                                <i className="fas fa-folder-plus" id="create-add-image"></i>
                            </label>
                            <label title="Remove image" onClick={() => setImageUrl(QuestionMark)}>
                                <i className="fas fa-trash-alt" id="create-delete-image"></i>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="add-question-container">
                    <button onClick={handleAddQuestion}>Thêm câu hỏi</button>
                </div>
            </div>
        </div>
    );
}

export default CreateQuestion;