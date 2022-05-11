import React from "react";
import ".//static/ProductItem.scss";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";

const ProductItem = ({ item }) => {
  return (
    <div className="productItem">
      <img className=" productItem__product-img" alt="" src={item.img} />
      <div className="productItem__info-product">
        <div className="productItem__info-product__icon">
          <ShoppingCartOutlined />
        </div>
        <div className="productItem__info-product__icon">
          <SearchOutlined />
        </div>
        <div className="productItem__info-product__icon">
          <FavoriteBorderOutlined />
        </div>
      </div>
      
    </div>
  );
};

export default ProductItem;
