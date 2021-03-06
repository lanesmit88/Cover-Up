import { fetch } from "./csrf";

const ALBUM_DATA = "album/albumData";

const ADD_SONG = "album/addSong";

const DELETE_SONG = "album/deleteSong";

const AlbumData = (album) => ({
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

export const albumData = (body) => {
  return async (dispatch) => {
    const res = await fetch(`/api/artists/${body.artistId}/${body.albumId}`);
    const album = res.data.album;
    dispatch(AlbumData(album));
  };
};

export const addSong = (body) => {
  return async (dispatch) => {
    const res = await fetch(
      `/api/artists/${body.artistId}/${body.albumId}/create`,
      {
        method: "POST",
        body: JSON.stringify(body),
      }
    );
    const newPost = res.data.addSong;
    dispatch(AddSong(newPost));
  };
};

export const deleteSong = (body) => {
  return async (dispatch) => {
    const res = await fetch(
      `/api/artists/${body.artistId}/${body.albumId}/${body.songId}/delete`,
      {
        method: "DELETE",
        body: JSON.stringify(body),
      }
    );

    const deleteSong = res.data.deleteSong;
    dispatch(DeleteSong(deleteSong));
  };
};

const initialState = [];

function albumReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case ALBUM_DATA:
      return action.album;
    case ADD_SONG:
      state.Songs.push(action.song);
      return state;
    case DELETE_SONG:
      return state.filter(
        (piece) => piece.Songs.id !== parseInt(action.song.songId)
      );
    default:
      return state;
  }
}

export default albumReducer;
