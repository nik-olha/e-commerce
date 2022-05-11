import React, { useState } from "react";
import ".//static/Slider.scss";
import { ArrowLeftRounded, ArrowRightRounded } from "@mui/icons-material";
import { sliderItems } from "../../data";
import styled from 'styled-components';


const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex *-100}vw)
`;

const Slider = () => {
  let [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if(direction==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    }
    else{
      setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }
  }
  return (
    <div className="slider">
      <div className="slider__arrow" id="arrow-left" onClick={()=>handleClick('left')}>
        <ArrowLeftRounded style={{ fontSize: 40 }} />
      </div>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item=> (
        <div className="slides" id={item.bd} key={item.id}>
          <div className="slides__img-container">
            <div className="slides__img-container__image">
              <img
                alt=""
                src={item.img}
              />
            </div>
          </div>
          <div className="slides__inf-container">
            <div className="slides__inf-container__info">
              <h1> {item.title}</h1>
              <p>
                {item.desc}
              </p>
              <button>SHOP NOW</button>
            </div>
          </div>
        </div>
        ))}
      </Wrapper>
      <div className="slider__arrow" id="arrow-right" onClick={()=>handleClick('right')}>
        <ArrowRightRounded style={{ fontSize: 40 }} />
      </div>
    </div>
  );
};

export default Slider;
