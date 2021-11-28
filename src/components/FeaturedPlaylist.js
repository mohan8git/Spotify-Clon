import React from "react";
import "../styles/SongRow.css";

function FeaturedPlaylist({ track }) {
  console.log("track", track);
  return (
    <div>
      <div className="songRow">
        <img className="songRow__album" src={track.images[0].url} alt="" />
        <div className="songRow__info">
          <h5>{track.name}</h5>
          {/* <p>{track.artists.map((artist) => artist.name).join(", ")}</p> */}
        </div>
      </div>
    </div>
  );
}

export default FeaturedPlaylist;
