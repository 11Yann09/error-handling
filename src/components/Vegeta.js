import React, { Component } from "react";
import handleClicks from "./HandleClicks";
import vegeta from "../vegeta.png";

class Vegeta extends Component {
  render() {
    const { backGround, clickHandler } = this.props;
    return (
      <div className={`col ${backGround}`}>
        <img onClick={clickHandler} src={vegeta} alt="vegeta" width={200} />
        <br />
      </div>
    );
  }
}

export default handleClicks(Vegeta);
