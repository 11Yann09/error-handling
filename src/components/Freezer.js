import React, { Component } from "react";
import handleClicks from "./HandleClicks";
import freezer from "../freezer.png";

class Freezer extends Component {
  render() {
    const { backGround, clickHandler } = this.props;

    return (
      <div className={`col ${backGround}`}>
        <img onClick={clickHandler} src={freezer} alt="freezer" width={250} />
        <br />
      </div>
    );
  }
}

export default handleClicks(Freezer);
