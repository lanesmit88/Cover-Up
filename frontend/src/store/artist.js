import { fetch } from "./csrf";

const ARTIST_DATA = "artists/artistData";

const ALBUM_DATA = "artist/albumData";

const artistData = (artist) => ({
  type: ARTIST_DATA,
  artist: artist,
});

const albumData = (album) => ({
  type: ALBUM_DATA,
  album: album,
});

export const fetchArtistData = (artistId) => {
  return async (dispatch) => {
    const response = await fetch(`/api/artists/${artistId}`);
    dispatch(artistData(response.data));
  };
};

export const fetchAlbumData = (artistId, albumId) => {
  return async (dispatch) => {
    const response = await fetch(`/api/artists/${artistId}/${albumId}`);
    dispatch(albumData(response.data));
  };
};

const initialState = [];

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case ARTIST_DATA:
      newState = action.artist;
      return newState;
    case ALBUM_DATA:
      newState = action.album;
      return newState;
    default:
      return state;
  }
}

export default reducer;
