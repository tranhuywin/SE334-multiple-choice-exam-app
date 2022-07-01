import React, {useState, useEffect} from "react";
import ResultApi from "../api/getResultApi";
import RecResult from "./result/rec-result";
import './results.css';

function Results() {
    const [data, setData] = useState(false);
    const [listResult, setListResult] = useState([]);

    const HandleResult = async () => {

        await ResultApi.getResult()
            .then((res) => {
                if(res !== null) {
                    setData(true);
                    setListResult(res);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const SplitDate = (data) => {
        var strArr = data.split("T");
        data = strArr[0];
    }

    useEffect(() => {
        HandleResult();
      }, []);

    return(
        <div className="results-page">
            <div className="heading-content">
                <div className="title-text-content">
                    <h2>
                        Danh sách kết quả bài thi
                    </h2>
                </div>
            </div>
            <div className="body-container">
                <div className="search-content">
                    <input placeholder="Nhập từ khóa tìm kiếm"/><i className="fas fa-search search-icon"></i>
                    <button>Lọc <i className="fas fa-filter"></i></button>
                </div>
                {!data ? 
                <div className="no-data">
                    <div className="no-data-img">
                        <img src="https://ninequiz.com/static/media/exam-empty-icon.ac923e16.jpg" alt="img"></img>
                    </div>
                    <p>Hiện tại chưa có kết quả nào được cập nhật.</p>
                </div> 
                :
                <div className="got-data">
                    {listResult.map((item, index) => {
                        return(
                            <RecResult key={index} 
                                        date={SplitDate(item.createdAt)} 
                                        time={item.time} 
                                        numOfQues={item.correctAnswers.length} 
                                        correctAnswer={item.correctAnswers.length}
                                        score={item.score}
                                        title={item.title}></RecResult>
                        )
                    })}
                </div>
                }
            </div>
        </div>
    );
}

export default Results;