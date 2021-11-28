import "./styles/App.css";
import Login from "./components/Login";
import React, { useEffect } from "react";
import { getTokenFromUrl } from "./spotify/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useDataLayerValue } from "./store/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);

  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    // window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify
        .getFeaturedPlaylists({
          limit: 10,
          offset: 1,
          country: "SE",
          locale: "sv_SE",
          timestamp: "2014-10-23T09:00:00",
        })
        .then(
          function (data) {
            dispatch({
              type: "SET_FEATURED_PLAYLISTS",
              featuredPlaylists: data,
            });
          },
          function (err) {
            console.log("Something went wrong!", err);
          }
        );

      spotify.getNewReleases({ limit: 10, offset: 0, country: "SE" }).then(
        function (data) {
          dispatch({
            type: "SET_NEW_RELEASES",
            newReleases: data,
          });
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );

      spotify.getPlaylist("0MEmHFwd93J0VaGlVhsnYp").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, []);

  console.log("🧑‍🦱", user);
  console.log("🎫", token);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
