import { fetch } from "./csrf";

const SET_ALL_ARTISTS = "artists/setArtists";

const ARTIST_DATA = "artists/artistData";

const setArtists = (artists) => ({
  type: SET_ALL_ARTISTS,
  artists: artists,
});

const artistData = (data) => ({
  type: ARTIST_DATA,
  data: data,
});

export const fetchAllArtists = () => {
  return async (dispatch) => {
    const res = await fetch("/api/artists");
    dispatch(setArtists(res.data.artists));
  };
};

export const fetchArtistData = () => {
  return async (dispatch) => {
    const res = await fetch("/api/artists/2");
    console.log(res);
    dispatch(artistData(res.data.artist));
  };
};

const initialState = [];

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_ALL_ARTISTS:
      newState = action.artists;
      return newState;
    case ARTIST_DATA:
      newState = action.data;
      return newState;
    default:
      return state;
  }
}

export default reducer;
