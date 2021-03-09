import { fetch } from "./csrf";

const ARTIST_DATA = "artists/artistData";

const ALBUM_DATA = "artist/albumData";

const ADD_SONG = "album/addSong";

const DELETE_SONG = "posts/deleteSong";

const artistData = (artist) => ({
  type: ARTIST_DATA,
  artist: artist,
});

const albumData = (album) => ({
  type: ALBUM_DATA,
  album: album,
});

const AddSong = (song) => ({
  type: ADD_SONG,
  song: song,
});

const DeleteSong = (song) => ({
  type: DELETE_SONG,
  song: song,
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

export const addSong = (body) => {
  return async (dispatch) => {
    const res = await fetch(`/api/artists/create`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    const newPost = res.data.addSong;
    dispatch(AddSong(newPost));
  };
};

export const deleteSong = (body) => {
  return async (dispatch) => {
    const res = await fetch(`/api/artists/delete`, {
      method: "DELETE",
      body: JSON.stringify(body),
    });

    const deletePost = res.data.deleteSong;
    dispatch(DeleteSong(deletePost));
  };
};

const initialState = [];

function artistReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case ARTIST_DATA:
      newState = action.artist;
      return newState;
    case ALBUM_DATA:
      newState = action.album;
      return newState;
    case ADD_SONG:
      newState = JSON.parse(JSON.stringify(state));
      let songsArr = newState.songs;
      songsArr.push(action.song);
      return newState;
    case DELETE_SONG:
      return state.filter((piece) => piece.id !== action.song.id);
    default:
      return state;
  }
}

export default artistReducer;
