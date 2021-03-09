import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addSong } from "../../store/album";
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

export default NewSong;
