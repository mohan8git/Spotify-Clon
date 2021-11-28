export const initialState = {
  user: null,
  playing: false,
  item: null,
  playlists: [],
  featuredPlaylists: [],
  newReleases: [],
  // token: 'BQAdMrKFQxN_7XAcmyELG4z1_oH5ikj4LMVDw9liJVmikNkvYxPG6eDZBmmDs3Aa50zQD1pVdSZEn8rVR4P7Zb0cZiALdljqaFYRs4K0df8IHn9vezAC4AbXPvvi2_bB_CoS9Q0QNdYgXXRwFlo612n-1HmCoLuIRK-0NWKxGcqWpTaFoUsD'
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_NEW_RELEASES":
      return {
        ...state,
        newReleases: action.newReleases,
      };
    case "SET_FEATURED_PLAYLISTS":
      return {
        ...state,
        featuredPlaylists: action.featuredPlaylists,
      };
    default:
      return state;
  }
};

export default reducer;
