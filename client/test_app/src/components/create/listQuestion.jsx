import React, {useState} from "react";

import Question from "./question";
import QuestionModule from "../../modules/question_module";

function ListQuestion() {
    const [listQuestion, setListQuestion] = useState([]);
    const HandleListQuestion = (questionModule) => {
        setListQuestion(prev => {
            const isAdded = listQuestion.includes(questionModule);
            if(isAdded) {
                return listQuestion.filter(item => item !== questionModule);
            } else {
                return [...prev, questionModule];
            }
        })
    }
    return(
        <div className="scroll-div">
            <Question/>
        </div>
    );
}

export default ListQuestion;