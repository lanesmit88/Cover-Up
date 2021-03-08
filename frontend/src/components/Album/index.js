import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAlbumData } from "../../store/artist";
import { addSong } from "../../store/artist";

const NewSong = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [dataUrl, setDataUrl] = useState("");
  const [ogArtist, setOgArtist] = useState("");
  const [albumId, setAlbumId] = useState("");

  function newPostHandeler(e) {
    e.preventDefault();
    dispatch(addSong({ name, dataUrl, ogArtist, albumId }));
    setName("");
    setDataUrl("");
    setOgArtist("");
    setOgArtist("");
  }

  return (
    <div id="new-song-form">
      <form onSubmit={newPostHandeler}>
        <input
          placeholder="Song Name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        ></input>
        <input
          placeholder="URL Path"
          type="text"
          value={dataUrl}
          onChange={(e) => {
            setDataUrl(e.target.value);
          }}
          required
        ></input>
        <input
          placeholder="Original Artist"
          type="text"
          value={ogArtist}
          onChange={(e) => {
            setOgArtist(e.target.value);
          }}
        ></input>
        <input
          placeholder="Album id"
          type="text"
          value={albumId}
          onChange={(e) => {
            setAlbumId(e.target.value);
          }}
          required
        ></input>
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
