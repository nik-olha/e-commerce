import React from "react";
import Navbar from "../components/navbar/Navbar";
import Announcement from "../components/announcement/Announcement";
import Products from "../components/products/Products";
import NewsLetter from "../components/newsLetter/NewsLetter";
import Footer from "../components/footer/Footer";
import "./static/ProductList.scss";

const ProductList = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <h1> </h1>
      <div className="f-container">
        <div className="f-container__filter">
          <span className="f-container__filter__text">Filter flowers:</span>
          <select className="f-container__filter__select">
            <option disabled selected>
              Color
            </option>
            <option> White</option>
            <option> Rose</option>
            <option> Yellow</option>
            <option> Red</option>
            <option> Orange</option>
            <option> Multi</option>
          </select>
          <select className="f-container__filter__select">
            <option disabled selected>
              Flower
            </option>
            <option> Tulip</option>
            <option> Rose</option>
            <option> Peony</option>
            <option> Hydrangea </option>
            <option> Sunflower</option>
            <option> Carnations</option>
            <option> Multi</option>
          </select>
        </div>
        <div className="f-container__filter">
          <span className="f-container__filter__text">Sort flowers:</span>
          <select className="f-container__filter__select">
            <option selected> Newest</option>
            <option> Price (asc)</option>
            <option> Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductList;
