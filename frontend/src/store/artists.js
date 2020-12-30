import { fetch } from './csrf'

const SET_ALL_ARTISTS = "artists/setArtists"

const setArtists = (artists) => ({
    type: SET_ALL_ARTISTS,
    artists: artists,
})

export const fetchAllArtists = () => {
    return async (dispatch) => {
        const res = await fetch("/api/artists");
        dispatch(
            setArtists(res.data.artists)
        )
    } 
}

const initialState = [];

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_ALL_ARTISTS:
      newState = action.artists
      return newState;
    default:
      return state;
  }
}

export default reducer;