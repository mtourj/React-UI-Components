import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";
import HeaderContainer from "../HeaderComponents/HeaderContainer";

const CardContainer = props => {
  return (
    <div className="card">
      <HeaderContainer />
      <a className="card-subcard" href="https://www.reactjs.org/">
        <div className="image">
          <CardBanner />
        </div>
        <CardContent />
      </a>
    </div>
  );
};

export default CardContainer;
