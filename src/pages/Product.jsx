import React from "react";
import "./static/Product.scss";
import Navbar from "../components/navbar/Navbar";
import Announcement from "../components/announcement/Announcement";
import NewsLetter from "../components/newsLetter/NewsLetter";
import Footer from "../components/footer/Footer";
import { Add, Remove } from "@mui/icons-material";

const Product = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="wrapper">
        <div className="wrapper__i-container">
          <img
            alt=""
            className="wrapper__i-container__img"
            src="https://res.cloudinary.com/dxlba6g7m/image/upload/v1652367260/pexels-secret-garden-2879821_iln3u2.jpg"
          ></img>
        </div>
        <div className="wrapper__info-container">
          <h1 className="wrapper__info-container__title"> Bloom</h1>
          <p className="wrapper__info-container__desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis ipsam perferendis fuga optio voluptatem commodi magni
            totam, provident dolorum voluptatum labore unde excepturi aliquid
            eos in accusantium eius, quasi non.
          </p>
          <span className="wrapper__info-container__price"> 20$</span>
          <div className="add-container">
            <div className="add-container__amount">
              <Add className="add-container__amount__add" />
              <span className="add-container__amount__text"> 1 </span>
              <Remove className="add-container__amount__remove" />
            </div>
            <button className="add-container__amount__button">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Product;
