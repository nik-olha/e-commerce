import React from "react";
import ".//static/Navbar.scss";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  return (
    <div className="container">
      <div className="container__wrapper">
        <div className="left">
          <span className="left__language">EN</span>
          <div className="left__search-container">
            <input></input>
            <Search style={{ color: "gray", fontSize: 18 }}></Search>
          </div>
        </div>
        <div className="center">
          <h1>Springify</h1>
        </div>
        <div className="right">
          <div className="right__menu-item">Register</div>
          <div className="right__menu-item">Sign in</div>
          <div className="right__menu-item">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
