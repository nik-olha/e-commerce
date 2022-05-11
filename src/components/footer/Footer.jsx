import React from "react";
import ".//static/Footer.scss";
import {
  Facebook,
  LinkedIn,
  Instagram,
  Pinterest,
  GitHub,
  Map,
  Phone,
  MailOutline,
} from "@mui/icons-material/";

const Footer = () => {
  return (
    <footer>
      <div className="f-left">
        <h1 className="f-left__logo">Springify</h1>
        <p className="f-left__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestias
          voluptate reiciendis. Dolores sequi nam, totam velit dignissimos fugit
          modi natus a dolorem soluta minima doloribus odio maxime voluptate
          alias.
        </p>
        <div className="f-left__socials">
          <div className="f-left__socials__icon" id="linkeid">
            <LinkedIn />
          </div>
          <div className="f-left__socials__icon" id="github">
            <GitHub />
          </div>
          <div className="f-left__socials__icon" id="facebook">
            <Facebook />
          </div>
          <div className="f-left__socials__icon" id="instagram">
            <Instagram />
          </div>
          <div className="f-left__socials__icon" id="pinterest">
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="f-center">
        <h3 className="f-center__title"> Useful links </h3>
        <ui className="f-center__list">
          <li className="f-center__list__item">
            {" "}
            Support the Armed Forces of Ukraine
          </li>
          <li className="f-center__list__item">
            {" "}
            Support charity foundation helping orphans in Ukraine
          </li>
          <li className="f-center__list__item">
            {" "}
            Support animals during the war in Ukraine
          </li>
          <li className="f-center__list__item">
            {" "}
            Humanutarian help for Ukraine
          </li>
        </ui>
      </div>
      <div className="f-right">
        <h3 className="f-right__title"> Contacts </h3>
        <p className="f-right__item">
          <Map style={{ marginRight: "10px" }} /> 1112 Diemen, Carel
          Willinkgracht
        </p>
        <p className="f-right__item">
          <Phone style={{ marginRight: "10px" }} /> +3123456789, +31987654321,
        </p>
        <p className="f-right__item">
          <MailOutline style={{ marginRight: "10px" }} /> contact@springify.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
