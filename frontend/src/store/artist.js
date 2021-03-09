import { fetch } from "./csrf";

const ARTIST_DATA = "artists/artistData";

const ADD_SONG = "album/addSong";

const DELETE_SONG = "posts/deleteSong";

const artistData = (artist) => ({
  type: ARTIST_DATA,
  artist: artist,
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

export const addSong = (body) => {
  return async (dispatch) => {
    const res = await fetch(
      `/api/artists/${body.artistId}/${body.albumId}/${body.songId}/create`,
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
    console.log(body)
    const res = await fetch(`/api/artists/${body.artistId}/${body.albumId}/${body.songId}/delete`, {
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
