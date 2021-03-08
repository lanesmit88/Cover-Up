import "./index.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAlbumData } from "../../store/artist";

const NewSong = () => {
  const { id, albumId, csrfToken } = useParams();

  function newPostHandeler(e) {
    e.preventDefault();
  }

  return (
    <div id="new-song-form">
      <form onSubmit={newPostHandeler}>
        <label>Song Name</label>
        <input type="text" required></input>
        <label>URL Path</label>
        <input type="text" required></input>
        <label>Original Artist</label>
        <input type="text"></input>
        <label>Album id</label>
        <input type="text" required></input>
        <button type="submit">Add New Song</button>
      </form>
    </div>
  );
};

const Song = ({ song }) => {
  const { id, albumId } = useParams();

  return (
    <div className="each-song-container">
      <h1 id="song-names">{song.name}</h1>
      <audio controls id="song-data">
        <source src={song.dataUrl} />
      </audio>
      <p id="song-comments">{song.comments}</p>
      <form action={`/artists/${id}/${albumId}/2`} method="delete">
        <button type="submit">Delete Song</button>
      </form>
    </div>
  );
};

const Album = () => {
  const { id, albumId } = useParams();
  const dispatch = useDispatch();
  const album = useSelector((reduxState) => {
    return reduxState.artist.songs;
  });

  useEffect(async () => {
    // const res = await fetch("/api/artists");
    // setArtists(res.data.artists);
    dispatch(fetchAlbumData(id, albumId));
  }, []);

  if (!album) {
    return null;
  }

  return (
    <div id="album-container">
      <h2 id="album-looker">Look at these songs!</h2>
      {/* {!albums && <h3>Loading...</h3>} */}
      {album &&
        album.map((song) => {
          return <Song song={song} key={song.id} />;
        })}

      <NewSong />
    </div>
  );
};

export default Album;
