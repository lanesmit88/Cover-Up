import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { deleteSong } from "../../store/artist";

const Song = ({ song, album, artist }) => {
  let songId = song.id;
  let albumId = album.id;
  let artistId = artist.id;
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
          type="submit"
        ></button>
      </form>
    </div>
  );
};

export default Song;
