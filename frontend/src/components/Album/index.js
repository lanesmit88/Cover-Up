import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAlbumData } from "../../store/artist";
import { addSong } from "../../store/artist";
import Song from "../Song";
import NewSong from "../NewSong";

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
