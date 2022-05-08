import React from "react";
import "./maincontent.css";
import RecContent from "./maincontent/rec-content";

function MainContent() {
    return(
        <div className="container-contents">
            <div className="top-content">
                <div className="top-title">
                    <h2 className="title">Trắc nghiệm online</h2>
                    <h2 className="slogan">Tạo đề dễ dàng - Kiểm tra đơn giản</h2>
                </div>
            </div>
            <div className=""></div>
            <div className="contents">
                <div className="main-content">
                    <RecContent img="https://s.tracnghiem.net/assets/images/home/feature3.jpg" title="Tạo đề thi" description="Soạn đề kiểm tra dễ dàng và nhanh chóng."/>
                    <RecContent img="https://s.tracnghiem.net/assets/images/home/feature1.jpg" title="Làm bài thi" description="Tổng hợp đầy đủ đề kiểm tra THPTQG của tất cả các môn học."/>
                    <RecContent img="https://s.tracnghiem.net/assets/images/home/feature2.jpg" title="Xem kết quả" description="Kết quả đánh giá trung thực, uy tín. Giúp học sinh nhìn rõ được khả năng của bản thân."/>
                </div>
            </div>
        </div>
    );
}

export default MainContent;