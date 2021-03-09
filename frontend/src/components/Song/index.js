import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { deleteSong } from "../../store/album";

const Song = ({ song }) => {
  let songId = song.id;
  const [removeSong, setDeleteSong] = useState(true);
  const { albumId, artistId } = useParams();
  const dispatch = useDispatch();
  function handleDeleteSong(e) {
    e.preventDefault();
    dispatch(deleteSong({ songId, albumId, artistId }));
  }
  return (
    <div className="each-song-container">
      <h1 id="song-names">{song.name}</h1>
      <audio controls id="song-data">
        <source src={song.dataUrl} />
      </audio>
      <p id="song-comments">{song.comments}</p>
      <form onSubmit={handleDeleteSong}>
        <button
          id="delete-song-button"
          className="fas fa-trash"
          value={removeSong}
          onChange={(e) => {
            setDeleteSong(e.target.value);
          }}
          type="submit"
        ></button>
      </form>
    </div>
  );
};

export default Song;
