import React from "react";
import Body from "./Body";
import Sidebar from "./Sidebar";

import "../styles/Player.css";
function Player({ spotify }) {
  return (
    <div className="player__body">
      <div className="top">
        <Sidebar />
      </div>
      <div className="bottom">
        <Body spotify={spotify} />
      </div>
    </div>
  );
}

export default Player;
