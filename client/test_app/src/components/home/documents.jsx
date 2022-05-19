import React from "react";
import "./documents.css";

import RecDocument from "./document/rec-document";

const DocumentsHome = [
    {
        img: "https://s.tracnghiem.net/images/share/thumb/230x144/529_1599818051.jpg",
        title: "Lý thuyết Hóa học lớp 12"
    },
    {
        img: "https://s.tracnghiem.net/images/share/thumb/230x144/913_1599817737.jpg",
        title: "Lý thuyết Toán học lớp 12"
    },
    {
        img: "https://s.tracnghiem.net/images/share/thumb/230x144/259_1599814381.jpg",
        title: "Danh sách bài Văn mẫu lớp 12"
    },
    {
        img: "https://s.tracnghiem.net/images/share/thumb/230x144/997_1599814641.jpg",
        title: "Lý thuyết Sinh học lớp 12"
    },
    {
        img: "https://s.tracnghiem.net/images/share/thumb/230x144/416_1599881168.jpg",
        title: "Toán hình học nâng cao"
    },
    {
        img: "https://s.tracnghiem.net/images/share/thumb/230x144/953_1599817409.jpg",
        title: "Lịch sử chuyên sâu lớp 12"
    },
    {
        img: "https://s.tracnghiem.net/images/share/thumb/230x144/450_1599860301.jpg",
        title: "Ôn tập Giáo dục công dân lớp 12"
    },
    {
        img: "https://s.tracnghiem.net/images/share/thumb/230x144/906_1599817514.jpg",
        title: "Nhập môn Công nghệ lớp 12"
    },
]

function Documents() {
    return(
        <div className="container-document">
            <div className="container-listdocument">
                <h2 className="document-title">TÀI LIỆU THAM KHẢO</h2>
                <div className="listdocument">
                    {DocumentsHome.map((item, index) => {
                        return(
                            <RecDocument key={index} img={item.img} title={item.title}/>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Documents;