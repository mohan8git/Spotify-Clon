import React from "react";
import "../styles/Body.css";
import { useDataLayerValue } from "../store/DataLayer";
import DiscoverWeekly from "./DiscoverWeekly";
import NewReleases from "./NewReleases";
import FeaturedPlaylist from "./FeaturedPlaylist";
import ScrollContainer from "react-indiana-drag-scroll";
import img1 from "../assets/undraw_happy_music_g6wc.svg";
import Footer from "./Footer";
function Body({ spotify }) {
  const [
    { playlists, discover_weekly, newReleases, featuredPlaylists, token },
    dispatch,
  ] = useDataLayerValue();

  return (
    <div className="body">
      <img class="header_image" src={img1} alt="" />

      <div className="body__songs__section">
        <div className="body__songs">
          <h2 className="play_list_name">Discover Weekly</h2>
          <ScrollContainer className="scroll-container" horizontal={true}>
            <div className="row1">
              {discover_weekly?.tracks.items.map((item) => (
                <DiscoverWeekly track={item.track} />
              ))}
            </div>
          </ScrollContainer>
        </div>
        <div className="body__songs">
          <h2 className="play_list_name">New Releases</h2>
          <ScrollContainer className="scroll-container" horizontal={true}>
            <div className="row1">
              {newReleases?.albums?.items.map((item) => (
                <NewReleases track={item} />
              ))}
            </div>
          </ScrollContainer>
        </div>

        <div className="body__songs">
          <h2 className="play_list_name">Featured Playlists</h2>
          <ScrollContainer>
            <div className="row1">
              {featuredPlaylists?.playlists?.items.map((item) => (
                <FeaturedPlaylist track={item} />
              ))}
            </div>
          </ScrollContainer>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Body;
