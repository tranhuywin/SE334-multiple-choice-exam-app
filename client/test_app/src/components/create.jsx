import React, {useState, useEffect} from "react";
import "./create.css"

import Option from "./create/option";
import CreateQuestion from "./create/create-question";
import Question from "./create/question";

function Create() {
    const [listQuestion, setListQuestion] = useState([]);
    const [listExam, setListExam] = useState([]);
    const [openListQues, setOpenListQues] = useState(false);
    // const [title, setTitle] = useState("");

    const remove = (item) => {
        setListQuestion((listQuestion) => listQuestion.filter((i) => i === item))
    }
    const handleAddExam = () => {
        setListExam(prev => [...prev,{
            idSubject: JSON.parse(localStorage.getItem('idSubject')),
            name: JSON.parse(localStorage.getItem('name')),
            listQues: listQuestion,
            timeDoExam: JSON.parse(localStorage.getItem('timeText')),
            titleExam: JSON.parse(localStorage.getItem('titleExam')),
            dateCreate: JSON.parse(localStorage.getItem('dateTime')),
        }])
    }

    useEffect(() => {
        localStorage.setItem('ListExam', JSON.stringify(listExam));
    }, [listExam]);

    return(
        <div className="create-part">
            <div className="heading">
                <div className="content-title">
                    <h2>CÀI ĐẶT BÀI THI</h2>
                </div>
            </div>
            <Option nextBtn={setOpenListQues}/>
            <div className="title-questions">
                <div className="content-title">
                    <h2>TẠO CÂU HỎI</h2>
                </div>
            </div>
            { openListQues && <CreateQuestion addQuestionToList={setListQuestion}/>}
            <div className="title-questions">
                <div className="content-title">
                    <h2>DANH SÁCH CÂU HỎI</h2>
                </div>
            </div>
            {openListQues && 
            <>
            {/* <div className="scroll-div"> */}
                {listQuestion.map((item, index) => {
                    return(
                        <Question key={index} question={item} num={index} handleDelete={remove.bind(this, index)}/>
                    )
                })}
            {/* </div> */}
            </>
            }

            <div className="create-content">
                <button onClick={handleAddExam}>Tạo đề</button>
            </div>
            
        </div>
    );
}

export default Create;