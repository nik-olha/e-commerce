import React from "react";
import "./static/Product.scss";
import Navbar from "../components/navbar/Navbar";
import Announcement from "../components/announcement/Announcement";
import NewsLetter from "../components/newsLetter/NewsLetter";
import Footer from "../components/footer/Footer";

const Product = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="wrapper">
          <div className="wrapper__i-container">
              <img alt="" className="wrapper__i-container__img" src="https://res.cloudinary.com/dxlba6g7m/image/upload/v1652367260/pexels-secret-garden-2879821_iln3u2.jpg"></img>
              
          </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Product;
