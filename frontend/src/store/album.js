import { fetch } from "./csrf";

const ALBUM_DATA = "album/albumData";

const AlbumData = (album) => ({
  type: ALBUM_DATA,
  album: album,
});

export const fetchAlbumData = (artistId, albumId) => {
  return async (dispatch) => {
    const response = await fetch(`/api/artists/${artistId}/${albumId}`);
    dispatch(AlbumData(response.data));
  };
};

const initialState = [];

function albumReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case ALBUM_DATA:
      newState = action.album;
      return newState;
    default:
      return state;
  }
}

export default albumReducer;
