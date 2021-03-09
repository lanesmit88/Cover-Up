import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addSong } from "../../store/album";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const NewSong = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [dataUrl, setDataUrl] = useState("");
  const [ogArtist, setOgArtist] = useState("");
  const [createSong, SetCreateSong] = useState(false)
  const { albumId, artistId } = useParams();

  function newSongHandeler(e) {
    e.preventDefault();
    dispatch(addSong({ name, dataUrl, ogArtist, albumId, artistId }));
    setName("");
    setDataUrl("");
    setOgArtist("");
    SetCreateSong(true)
  }

  return (
    <div id="new-song-form">
      <form onSubmit={newSongHandeler}>
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
        <button type="submit">Add New Song</button>
      </form>
    </div>
  );
};

export default NewSong;
