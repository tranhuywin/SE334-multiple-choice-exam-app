import React, {useState} from "react";
import "./intro.css";

import Image1 from "../../assets/images/pic2.jpg";
import Image2 from "../../assets/images/pic1.jpg";
import Image3 from "../../assets/images/pic3.jpg";
import LeftArrow from "../../assets/icons/left-arrow.svg";
import RightArrow from "../../assets/icons/right-arrow.svg";

const ListSlider = [
    {
        imageSrc: Image2,
        label: 'First slide label',
        text: 'Trắc nghiệm online giúp tiết kiệm thời gian tạo và làm bài thi.'
    },
    {
        imageSrc: Image3,
        label: 'Second slide label',
        text: 'Hệ thống quản lý đề kiểm tra, quản lý học viên phong phú.'
    },
    {
        imageSrc: Image1,
        label: 'Third slide label',
        text: 'Kết quả trực quan, minh bạch dễ dàng đánh giá.'
    },
]

function Intro() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    console.log("click next");
    if(slideIndex !== ListSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(1);
    }
  }

  const moveDot = index => {
    setSlideIndex(index);
  }

  const preSlide = () => {
    console.log("click prev");
    if(slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(ListSlider.length);
    }
  }

  return (
    <div className="intro-part">
      <div className="container-slider">
        {/* {ListSlider.map((item, index) => {
          return(
            <div key={index} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
              <img src={item.imageSrc} alt="#" className="slider-img"></img>
              <div className="slider-divtext">
                <p className="slider-text">{item.text}</p>
              </div>
            </div>
          )
        })}
        <ButtonSlider OnClick={nextSlide} direction="next"></ButtonSlider>
        <ButtonSlider OnClick={preSlide} direction="back"></ButtonSlider>
        <div className="container-dots">
          {Array.from({length: ListSlider.length}).map((item, index) => (
            <div className={slideIndex === index + 1 ? "dot active" : "dot"} onClick={() => moveDot(index + 1)}></div>
          ))}
        </div> */}

        <div className="text-container">
          <div className="text-content">
            <h3>Trắc nghiệm online</h3>
            <ul>
              <li>Tạo đề kiểm tra</li>
              <li>Thi trắc nghiệm trực tuyến</li>
              <li>Tra cứu kết quả</li>
            </ul>
          </div>
        </div>
        <div className="img-container">
          <img src="https://ninequiz.com/static/media/image2.b1d075b4.png" alt="img"></img>
        </div>
      </div>
    </div>
  );
}

function ButtonSlider({OnClick, direction}) {
  return(
    <button className={direction === "next" ? "btn-slide next" : "btn-slide prev"} onClick={OnClick}>
      <img alt="arrow" src={direction === "next" ? RightArrow : LeftArrow}></img>
    </button>
  );
}

export default Intro;