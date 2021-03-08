import { fetch } from "./csrf.js";

const ADD_SONG = "album/addSong";

const AddSong = (song) => ({
  type: ADD_SONG,
  song: song,
});

export const addSong = (body) => {
  return async (dispatch) => {
    const res = await fetch(`/api/users/${body.userId}/post`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    const newPost = res.data.addSong;
    dispatch(AddSong(newPost));
  };
};

const initialState = [];

function songsReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case NEW_POST:
      return [...state, action.post];
    default:
      return state;
  }
}

export default songsReducer;
