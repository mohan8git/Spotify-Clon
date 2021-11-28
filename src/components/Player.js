import React from "react";
import Body from "./Body";
import Sidebar from "./Sidebar";

import "../styles/Player.css";
function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
    </div>
  );
}

export default Player;
