import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Song = ({ song }) => {
  const { id, albumId } = useParams();
  const dispatch = useDispatch();
  function handleDeleteSong(e) {
    e.preventDefault();
    // dispatch(deleteSong({ id }));
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
          type="submit"
        ></button>
      </form>
    </div>
  );
};

export default Song;
