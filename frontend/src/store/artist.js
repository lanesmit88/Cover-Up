import { fetch } from "./csrf";

const ARTIST_DATA = "artists/artistData";

const artistData = (artist) => ({
  type: ARTIST_DATA,
  artist: artist,
});

export const fetchArtistData = (artistId) => {
  return async (dispatch) => {
    const response = await fetch(`/api/artists/${artistId}`);
    dispatch(artistData(response.data));
  };
};

const initialState = [];

function artistReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case ARTIST_DATA:
      newState = action.artist;
      return newState;
    default:
      return state;
  }
}

export default artistReducer;
