export const authEndpoint = "https://accounts.spotify.com/authorize";

// const redirectUri =
//   "https://spotify-clone-mohan.s3.us-east-2.amazonaws.com/index.html";

const redirectUri = "http://localhost:3000/";
const clientId = "351365eb3d5d4ad1a69461c8c7287828";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}
&response_type=token&show_dialog=true`;
