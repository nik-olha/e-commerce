import React from "react";
import ".//static/Slider.scss";
import { ArrowLeftRounded, ArrowRightRounded } from "@mui/icons-material";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__arrow" id="arrow-left">
        <ArrowLeftRounded style={{ fontSize: 40 }} />
      </div>
      <div className="slider__wrapper">
        <div className="slides">
          <div className="slides__img-container">
            <div className="slides__img-container__image">
              <img
                height="100%" alt=""
                src="https://res.cloudinary.com/dxlba6g7m/image/upload/v1651674438/herfst_ahz8z4.jpg"
              />
            </div>
          </div>
          <div className="slides__inf-container">
            <div className="slides__inf-container__info"></div>
          </div>
        </div>
      </div>
      <div className="slider__arrow" id="arrow-right">
        <ArrowRightRounded style={{ fontSize: 40 }} />
      </div>
    </div>
  );
};

export default Slider;
