import React, { useEffect } from "react";
import SidebarOption from "./SidebarOption";
import "../styles/Sidebar.css";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDataLayerValue } from "../store/DataLayer";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import BarChartIcon from "@mui/icons-material/BarChart";

function Sidebar() {
  const [{ user, playlists }, dispatch] = useDataLayerValue();
  const [flag, setFlag] = React.useState(false);
  // useEffect({}, [flag]);
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Avatar
          className="pic"
          src={user?.images[0]?.url}
          alt={user?.display_name}
        />
        <h4 style={{ color: "white" }}>{user?.display_name}</h4>
      </div>

      <SidebarOption title="Discover" Icon={HeadphonesIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Favourite" Icon={FavoriteIcon} />
      <SidebarOption title="Playlists" Icon={PlayCircleIcon} />
      <SidebarOption title="Charts" Icon={BarChartIcon} />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}

      <a
        className="logout"
        onClick={() => {
          window.location.hash = "";
          window.location.reload(false);
        }}
      >
        Logout
      </a>
    </div>
  );
}

export default Sidebar;
