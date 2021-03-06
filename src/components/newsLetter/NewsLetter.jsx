import React from "react";
import ".//static/NewsLetter.scss";
import SendIcon from "@mui/icons-material/Send";

const NewsLetter = () => {
  return (
    <div className="news">
      <h1> Newsletter</h1>
      <div className="news__descriotion">
        Get timly updates from your favorite flowers
      </div>
      <div className="news__input-container">
        <input placeholder="your email"></input>
        <button className="news__input-container__button">
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
