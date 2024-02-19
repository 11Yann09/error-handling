import React, { Component } from "react";
import handleClicks from "./HandleClicks";
import goku from "../goku.png";

class Goku extends Component {
  render() {
    const { backGround, clickHandler } = this.props;

    return (
      <div className={`col ${backGround}`}>
        <img onClick={clickHandler} src={goku} alt="goku" width={220} />
        <br />
      </div>
    );
  }
}

export default handleClicks(Goku);
